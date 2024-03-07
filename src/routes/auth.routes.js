import { Router } from "express";
import {
  login,
  register,
  logout,
  VerifySession,
  RecoveryPassword,
  VerifyCodeRecoveryPassword,
  EmailVerify,
  verifyTokenLogin,
} from "../controllers/users/auth.controller.js";
import { Delete } from "../controllers/users/user.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/verify", VerifySession);

router.delete("/user/:id", Delete);

router.post("/recovery", RecoveryPassword);
router.post("/verifyCode", VerifyCodeRecoveryPassword);
// ! Verify Token aqui abajo hay que confirar el back
router.post("/EmailVerify", EmailVerify);

router.post("/verifyToken", verifyTokenLogin);

export default router;
