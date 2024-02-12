export function CorsConfig() {
  return {
    origin: ["http://localhost:5173", "*"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  };
}
