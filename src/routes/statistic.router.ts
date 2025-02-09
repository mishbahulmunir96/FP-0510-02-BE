import { Router } from "express";
import { verifyToken } from "../lib/jwt";
import { isTenant } from "../lib/isTenant";
import {
  getPropertyReportController,
  getTransactionReportController,
  getUserReportController,
} from "../controllers/statistic.controller";

const router = Router();

router.get("/property", verifyToken, isTenant, getPropertyReportController);
router.get(
  "/transaction",
  verifyToken,
  isTenant,
  getTransactionReportController
);
router.get("/user", verifyToken, isTenant, getUserReportController);

export default router;
