import { Router } from "express";
import {
  login,
  register,
  logout,
  VerifySession,
  RecoveryPassword,
  VerifyCodeRecoveryPassword,
  EmailVerify,
} from "../controllers/users/auth.controller.js";


const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/verify", VerifySession);



router.post("/recovery", RecoveryPassword);
router.post("/verifyCode", VerifyCodeRecoveryPassword);
// ! Verify Token aqui abajo hay que confirar el back
router.post("/EmailVerify", EmailVerify);

export default router;
