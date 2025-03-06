"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyMonthlyPriceComparisonController = exports.compareRoomPricingController = exports.getMonthlyCalendarController = void 0;
const get_monthly_availability_and_pricing_service_1 = require("../services/calendar/get-monthly-availability-and-pricing.service");
const compare_room_pricing_service_1 = require("../services/calendar/compare-room-pricing-service");
const get_property_monthly_price_comparison_service_1 = require("../services/calendar/get-property-monthly-price-comparison.service");
const getMonthlyCalendarController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roomId } = req.params;
        let { date } = req.query;
        let parsedDate;
        if (!date) {
            parsedDate = new Date();
        }
        else {
            parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid date format. Please use YYYY-MM-DD format.",
                });
            }
        }
        parsedDate.setDate(1);
        parsedDate.setHours(0, 0, 0, 0);
        const calendarData = yield (0, get_monthly_availability_and_pricing_service_1.getMonthlyAvailabilityAndPricingService)(parseInt(roomId), parsedDate);
        res.status(200).json({
            success: true,
            data: calendarData,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getMonthlyCalendarController = getMonthlyCalendarController;
const compareRoomPricingController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roomIds, startDate, endDate } = req.body;
        if (!roomIds || !Array.isArray(roomIds) || roomIds.length === 0) {
            res.status(400).json({
                success: false,
                message: "Please provide a valid array of room IDs",
            });
        }
        if (!startDate || !endDate) {
            res.status(400).json({
                success: false,
                message: "Both startDate and endDate are required",
            });
        }
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);
        if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
            res.status(400).json({
                success: false,
                message: "Invalid date format. Please use YYYY-MM-DD format.",
            });
        }
        if (parsedStartDate > parsedEndDate) {
            res.status(400).json({
                success: false,
                message: "startDate must be before or equal to endDate",
            });
        }
        const comparisonData = yield (0, compare_room_pricing_service_1.compareRoomPricingService)(roomIds.map((id) => parseInt(id)), parsedStartDate, parsedEndDate);
        res.status(200).json({
            success: true,
            data: comparisonData,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.compareRoomPricingController = compareRoomPricingController;
const getPropertyMonthlyPriceComparisonController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { propertyId } = req.params;
        let { date } = req.query;
        let parsedDate;
        if (!date) {
            parsedDate = new Date();
        }
        else {
            parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                res.status(400).json({
                    success: false,
                    message: "Invalid date format. Please use YYYY-MM-DD format.",
                });
            }
        }
        const result = yield (0, get_property_monthly_price_comparison_service_1.getPropertyMonthlyPriceComparisonService)(parseInt(propertyId), parsedDate);
        res.status(200).json({
            success: true,
            propertyId: parseInt(propertyId),
            month: `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, "0")}`,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertyMonthlyPriceComparisonController = getPropertyMonthlyPriceComparisonController;
