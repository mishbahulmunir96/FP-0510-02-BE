import { Router } from "express";
import { xenditController } from "../controllers/xendit.controller";
import { xenditWebhookMiddleware } from "../middlewares/xendit.midleware";

const router = Router();

router.post("/callback", xenditWebhookMiddleware, xenditController);

export default router;
