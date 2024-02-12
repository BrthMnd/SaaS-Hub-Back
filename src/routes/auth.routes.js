import { Router } from "express";
import {
  login,
  register,
  logout,
  VerifySession,
  RecoveryPassword,
  VerifyCodeRecoveryPassword,
} from "../controllers/users/auth.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/verify", VerifySession);

router.post("/recovery", RecoveryPassword);
router.post("/verifyCode", VerifyCodeRecoveryPassword);

export default router;
