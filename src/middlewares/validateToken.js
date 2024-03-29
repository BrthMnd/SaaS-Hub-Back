import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const autenticacionRequerida = (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  console.log(req.cookies);

  if (!token) return res.status(401).json({ message: "Autorizacion denegada" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "token invalido" });

    req.user = user;

    next();
  });
};
