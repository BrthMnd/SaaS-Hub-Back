import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";

import { CorsConfig } from "./config/cors.config.js";

dotenv.config();

const app = express();

app.use(cors(CorsConfig()));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

routes(app);

export default app;
