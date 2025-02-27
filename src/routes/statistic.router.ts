import { Router } from "express";
import {
  getPropertyCalendarReportController,
  getSalesReportController,
} from "../controllers/statistic.controller";
import { isTenant } from "../lib/isTenant";
import { verifyToken } from "../lib/jwt";

const router = Router();

router.get("/report", verifyToken, isTenant, getSalesReportController);
router.get(
  "/calendar-report",
  verifyToken,
  isTenant,
  getPropertyCalendarReportController
);

export default router;
