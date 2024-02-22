import request from "supertest";
import app from "../app";

describe("Autenticar los usuarios", () => {
  test("Iniciar sesion", async () => {
    const response = await request(app).post("/api/login").send({
      correo: "dufyapiyda@gufum.com",
      clave: "test123",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("correo", "dufyapiyda@gufum.com");
    expect(response.header["set-cookie"]).toBeDefined();
  });
  // test("Registro del usuario", async () => {
  //   const response = await request(app).post("/api/register").send({
  //     correo: "test1@gmail.com",
  //     password: "test123",
  //   });
  //   expect(response.status).toBe(200);
  // });
});
