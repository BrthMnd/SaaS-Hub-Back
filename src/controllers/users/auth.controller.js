import { PrismaClient } from "@prisma/client";

import bcrypt from "bcrypt";
import { creacionToken, verifyToken } from "../../libs/jwt.js";
import { useError } from "../../helpers/useError.js";
import { SendMail } from "../../helpers/Mails/SendMail.js";
import {
  NotificationTemplate,
  TemplateEmail,
  TemplateHtml,
} from "../../helpers/Mails/Template.js";
import { useSend } from "../../helpers/useSend.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
//registro
export const register = async (req, res) => {
  const { nombre, correo, clave } = req.body;
  const Title = "Verifica tu cuenta";

  try {
    const passwordhash = bcrypt.hashSync(clave, 10);

    const userExist = await prisma.usuario.findFirst({
      where: {
        correo: correo,
      },
    });

    if (userExist) {
      return res.status(400).json("usuario ya registrado");
    }

    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        correo,
        fecha_creacion: new Date(),
        rol: { connect: { idrol: 1 } },
        cuenta: { create: { clave: passwordhash } },
      },
    });

    const token = await creacionToken({ id: newUser.idusuario });
    res.cookie("token", token);
    // send mail
    await SendMail(TemplateHtml(correo, Title, "hola"), Title, correo);

    res.json({
      correo: newUser.correo,
      nombre: newUser.nombre,
    });
  } catch (error) {
    console.error("Error durante el registro:", error);
    res.status(500).json({ message: "Error interno del servidor", error });
  }
};

export const login = async (req, res) => {
  const { correo, clave } = req.body;

  try {
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: {
        correo: correo,
      },
      select: { cuenta: true, correo: true, nombre: true, idusuario: true },
    });
    if (!usuarioEncontrado)
      return res.status(400).json(useError("Usuario no encontrado"));

    const usuarioIgual = await bcrypt.compare(
      clave,
      usuarioEncontrado.cuenta.clave
    );

    if (!usuarioIgual)
      return res.status(400).json(useError("clave incorrecta"));

    const token = await creacionToken({ id: usuarioEncontrado.idusuario });
    res.cookie("token", token);

    res.json({
      correo: usuarioEncontrado.correo,
      nombre: usuarioEncontrado.nombre,
      token: token,
    });
  } catch (error) {
    console.error("Error durante el registro:", error);
    res.status(500).json(useError("Error interno del servidor", error));
  }
};

//? nos permite vaciar la cookies y los token al cerrar sesion
// ! nota de Brandon, la estoy borrando desde. el front.
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
// ToDo: Separar desde aqui
export const VerifySession = () => {
  const { token } = req.cookie();
  console.log(token);
};

export const RecoveryPassword = async (req, res) => {
  const { correo } = req.body;
  const Title = "Recuperacion de contraseña";
  try {
    const user = await prisma.usuario.findFirst({
      where: {
        correo,
      },
    });
    if (!user) return res.status(404).json(useError("Usuario no encontrado"));
    const code = Math.floor(Math.random() * 9000) + 1000;

    const token = await creacionToken({
      CodeVerify: code,
      id: user.idusuario,
    });

    await SendMail(
      TemplateEmail(
        correo,
        `Codigo de verificacion de contraseña es: <strong>${code}</strong> `
      ),
      Title,
      correo
    );
    res.cookie("CodeVerify", token);
    return res.status(200).json(useSend("Correo enviado", token));
  } catch (e) {
    console.log(e);
    return res.status(500).json(useError("Correo no enviado", e.error));
  }
};

export const VerifyCodeRecoveryPassword = async (req, res) => {
  const { code } = req.body;
  const { CodeVerify } = req.cookies;
  try {
    if (!CodeVerify)
      return res.status(404).json(useError("Cookie no encontrada..."));
    const decode = await verifyToken(CodeVerify);
    console.log(code, " ", decode.CodeVerify.toString());
    const user = await prisma.usuario.findFirst({
      where: {
        idusuario: decode.id,
      },
    });

    if (!user) return res.status(404).json(useError("Usuario no encontrado"));
    if (!code == decode.CodeVerify.toString())
      return res.status(404).json(useError("Codigo invalido"));
    return res
      .status(200)
      .json(useSend("Autorizado", { authorized: true, userId: res.usuarioid }));
  } catch (e) {
    console.log(e);
    return res.status(500).json(useError("Correo no enviado", e.error));
  }
};
export const ChangePassword = async (req, res) => {
  const { clave } = req.body;
  const Title = "Se ha cambiado tu contraseña";
  const { userId } = req.cookies;

  try {
    const passwordhash = bcrypt.hashSync(clave, 10);

    const usuario = await prisma.usuario.findUnique({
      where: { idusuario: userId },
      select: { cuenta: true },
    });

    if (!usuario || !usuario.cuenta) {
      return res
        .status(404)
        .json(useError("El usuario o la cuenta no existe."));
    }

    const cuentaId = usuario.cuenta.idcuenta;

    const cuentaActualizada = await prisma.cuenta.update({
      where: { idcuenta: cuentaId },
      data: { clave: passwordhash },
    });

    console.log(cuentaActualizada);
    res.status(200).json(useSend("Contraseña actualizada"));
  } catch (error) {
    console.error("Error durante el registro:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
