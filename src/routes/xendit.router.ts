import { Router } from "express";
import { xenditController } from "../controllers/xendit.controller";

const router = Router();

router.post("/", xenditController);

export default router;
