import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export function creacionToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
export async function verifyToken(payload) {
  console.log("Token...");
  console.log(payload);
  try {
    await jwt.verify(payload.token, TOKEN_SECRET);

    const decode = await jwt.decode(payload.token);
    return decode;
  } catch (error) {
    throw error;
  }
}
