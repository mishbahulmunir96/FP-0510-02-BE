import express from "express";
import {
  loginController,
  registerController,
  verifyController,
} from "../controllers/auth.controller";
import { validateLogin, validateRegister } from "../validators/auth.validators";
import { uploader } from "../lib/multer";

const router = express.Router();

router.post("/login", validateLogin, loginController);

router.post(
  "/register",
  uploader(2).single("image"),
  express.json(),
  validateRegister,
  registerController
);

router.post("/verify", verifyController);
export default router;
