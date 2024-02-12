import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMany = async (req, res) => {
  try {
    const usuario = await prisma.rol.findMany();

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
