import { Router } from "express";
import UserRoutes from "./Users/users.routes.js";
import AuntRoute from "./auth.routes.js";
import { autenticacionRequerida } from "../middlewares/validateToken.js";
const router = Router();

router.use("/", AuntRoute);
router.use("/user", autenticacionRequerida, UserRoutes);

export default router;
