import { Router } from "express";
import { generateTokenController } from "../controllers/generate-token.controller";

const router = Router();

router.post("/", generateTokenController);

export default router;
