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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyAvailabilityAndPricingService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const calendar_utils_1 = require("../../utils/calendar.utils");
const getMonthlyAvailabilityAndPricingService = (roomId, startDate) => __awaiter(void 0, void 0, void 0, function* () {
    const date = startDate instanceof Date ? startDate : new Date(startDate);
    const endDate = new Date(date);
    endDate.setMonth(date.getMonth() + 1);
    try {
        const room = yield prisma_1.default.room.findUnique({
            where: { id: roomId },
            select: {
                id: true,
                price: true,
                stock: true,
                peakSeasonRate: {
                    where: {
                        isDeleted: false,
                        AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
                    },
                    select: {
                        price: true,
                        startDate: true,
                        endDate: true,
                    },
                },
                roomNonAvailability: {
                    where: {
                        isDeleted: false,
                        AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
                    },
                    select: {
                        startDate: true,
                        endDate: true,
                        reason: true,
                    },
                },
                reservation: {
                    where: {
                        AND: [{ startDate: { lte: endDate } }, { endDate: { gte: date } }],
                    },
                    select: {
                        startDate: true,
                        endDate: true,
                    },
                },
            },
        });
        if (!room) {
            throw new Error(`Room with ID ${roomId} not found`);
        }
        const calendarData = (0, calendar_utils_1.generateCalendarData)(date, endDate, room.price, room.stock, room.peakSeasonRate, room.roomNonAvailability, room.reservation);
        return {
            roomId: room.id,
            basePrice: room.price,
            calendar: calendarData,
        };
    }
    catch (error) {
        console.error("Error in getMonthlyAvailabilityAndPricing:", error);
        throw error;
    }
});
exports.getMonthlyAvailabilityAndPricingService = getMonthlyAvailabilityAndPricingService;
