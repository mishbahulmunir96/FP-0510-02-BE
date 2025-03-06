"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendar_controller_1 = require("../controllers/calendar.controller");
const router = (0, express_1.Router)();
router.get("/room/:roomId", calendar_controller_1.getMonthlyCalendarController);
router.post("/compare", calendar_controller_1.compareRoomPricingController);
router.get("/property/:propertyId", calendar_controller_1.getPropertyMonthlyPriceComparisonController);
exports.default = router;
