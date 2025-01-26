import express from "express";
import { registerController } from "../controllers/auth.controller";
import { validateRegister } from "../validators/auth.validators";
import { uploader } from "../lib/multer";

const router = express.Router();

router.post(
  "/register",
  uploader(2).single("image"),
  express.json(),
  validateRegister,
  registerController
);

export default router;
