import { Router } from "express";
import UserRoutes from "./Users/users.routes.js";
import AuntRoute from "./auth.routes.js";
import { VerifyTokenJWT } from "../middlewares/validateToken.js";
const router = Router();

router.use("/", AuntRoute);
router.use("/user", VerifyTokenJWT, UserRoutes);

export default (app) => app.use("/api", router);
