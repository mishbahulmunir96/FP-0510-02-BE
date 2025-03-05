// src/routes/calendar.router.ts
import { Router } from "express";
import {
  getMonthlyCalendarController,
  compareRoomPricingController,
  getPropertyMonthlyPriceComparisonController,
} from "../controllers/calendar.controller";

const router = Router();
router.get("/room/:roomId", getMonthlyCalendarController);
router.post("/compare", compareRoomPricingController);
router.get(
  "/property/:propertyId",
  getPropertyMonthlyPriceComparisonController
);

export default router;
