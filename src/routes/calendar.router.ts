// src/routes/calendar.router.ts
import { Router } from "express";
import {
  getMonthlyCalendarController,
  compareRoomPricingController,
  getPropertyMonthlyPriceComparisonController,
} from "../controllers/calendar.controller";

const router = Router();

/**
 * @route GET /calendar/room/:roomId
 * @desc Get monthly availability and pricing calendar for a specific room
 * @access Public
 */
router.get("/room/:roomId", getMonthlyCalendarController);

/**
 * @route POST /calendar/compare
 * @desc Compare pricing for multiple rooms over a date range
 * @access Public
 */
router.post("/compare", compareRoomPricingController);

/**
 * @route GET /calendar/property/:propertyId
 * @desc Get the price comparison data for all rooms in a property
 * @access Public
 */
router.get(
  "/property/:propertyId",
  getPropertyMonthlyPriceComparisonController
);

export default router;
