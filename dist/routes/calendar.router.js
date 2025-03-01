"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/calendar.router.ts
const express_1 = require("express");
const calendar_controller_1 = require("../controllers/calendar.controller");
const router = (0, express_1.Router)();
/**
 * @route GET /calendar/room/:roomId
 * @desc Get monthly availability and pricing calendar for a specific room
 * @access Public
 */
router.get("/room/:roomId", calendar_controller_1.getMonthlyCalendarController);
/**
 * @route POST /calendar/compare
 * @desc Compare pricing for multiple rooms over a date range
 * @access Public
 */
router.post("/compare", calendar_controller_1.compareRoomPricingController);
/**
 * @route GET /calendar/property/:propertyId
 * @desc Get the price comparison data for all rooms in a property
 * @access Public
 */
router.get("/property/:propertyId", calendar_controller_1.getPropertyMonthlyPriceComparisonController);
exports.default = router;
