import { Router } from "express";
import {
  // getCalendarReportController,
  getPropertyCalendarReportController,
  getPropertyReportController,
  getTransactionReportController,
  getUserReportController,
} from "../controllers/statistic.controller";
import { isTenant } from "../lib/isTenant";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/property", verifyToken, isTenant, getPropertyReportController);
router.get(
  "/transaction",
  verifyToken,
  isTenant,
  getTransactionReportController
);
router.get("/user", verifyToken, isTenant, getUserReportController);
// router.get("/calendar", verifyToken, isTenant, getCalendarReportController);
router.get(
  "/calendar-report",
  verifyToken,
  isTenant,
  getPropertyCalendarReportController
);

export default router;
