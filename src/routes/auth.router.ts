import express from "express";
import {
  forgotPasswordController,
  loginController,
  loginWithGoogleController,
  registerController,
  resetPasswordController,
  verifyController,
} from "../controllers/auth.controller";
import {
  validateForgotPassword,
  validateLogin,
  validateRegister,
  validateResetPassword,
} from "../validators/auth.validators";
import { uploader } from "../lib/multer";
import { verifyTokenReset } from "../lib/jwt";

const router = express.Router();

router.post("/login", validateLogin, loginController);
router.post("/login/google", loginWithGoogleController);
router.post(
  "/register",
  uploader(2).single("image"),
  express.json(),
  validateRegister,
  registerController
);
router.post("/verify", verifyController);
router.post(
  "/forgot-password",
  validateForgotPassword,
  forgotPasswordController
);
router.patch(
  "/reset-password",
  verifyTokenReset,
  validateResetPassword,
  resetPasswordController
);

export default router;
