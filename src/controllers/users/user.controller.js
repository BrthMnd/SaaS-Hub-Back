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
      token:usuario.token
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

    return res.json(usuario);
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
export const update = async (req, res) => {
  const UserId = parseInt(req.params.id);
  const { nombre, correo,genero } = req.body; // Asumiendo que los datos a actualizar se reciben en el cuerpo de la solicitud

  try {
    const usuario = await prisma.usuario.findFirst({
      where: { idusuario: UserId },
    });

    if (!usuario) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Actualizar la información del usuario
    const updatedUsuario = await prisma.usuario.update({
      where: { idusuario: UserId },
      data: { nombre, correo,genero },
    });

    return res.json({"Se actualizo con exito":updatedUsuario});
    
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
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
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Usuario encontrado, ahora eliminar
    await prisma.usuario.delete({
      where: { idusuario: UserId },
    });

    return res.json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error("Error al obtener/eliminar usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};



