import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCookie = async (req, res) => {
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: req.user.idusuario },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    console.log(usuario);

    return res.json({
      id: usuario.idusuario,
      nombre: usuario.nombre,
      correo: usuario.correo,
    });
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", err: error });
  }
};
export const getMany = async (req, res) => {
  try {
    const usuario = await prisma.usuario.findMany({
      include: {
        rol: true,
        estado: true,
      },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuarios no encontrados" });
    }

    return res.json(usuario);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const getFirst = async (req, res) => {
  const UserId = parseInt(req.params.id);
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: UserId },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuarios no encontrados" });
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const post = async (req, res) => {
  const UserId = parseInt(req.params.id);
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: UserId },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuarios no encontrados" });
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const put = async (req, res) => {
  const UserId = parseInt(req.params.id);
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: UserId },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuarios no encontrados" });
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const Delete = async (req, res) => {
  const UserId = parseInt(req.params.id);
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: UserId },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuarios no encontrados" });
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
