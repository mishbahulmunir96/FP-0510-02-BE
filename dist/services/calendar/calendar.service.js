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
exports.getPropertyMonthlyPriceComparisonService = exports.compareRoomPricingService = exports.getMonthlyAvailabilityAndPricingService = void 0;
// src/services/calendar/calendar.service.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getMonthlyAvailabilityAndPricingService = (roomId, startDate) => __awaiter(void 0, void 0, void 0, function* () {
    // Ensure startDate is a valid date
    const date = startDate instanceof Date ? startDate : new Date(startDate);
    // Calculate the end date (1 month from start date)
    const endDate = new Date(date);
    endDate.setMonth(date.getMonth() + 1);
    try {
        // Get the room details
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
        // Generate calendar data for the entire month
        const calendarData = generateCalendarData(date, endDate, room.price, room.stock, room.peakSeasonRate, room.roomNonAvailability, room.reservation);
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
const compareRoomPricingService = (roomIds, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield prisma_1.default.room.findMany({
            where: {
                id: { in: roomIds },
                isDeleted: false,
            },
            select: {
                id: true,
                name: true,
                type: true,
                price: true,
                propertyId: true,
                peakSeasonRate: {
                    where: {
                        isDeleted: false,
                        AND: [
                            { startDate: { lte: endDate } },
                            { endDate: { gte: startDate } },
                        ],
                    },
                    select: {
                        price: true,
                        startDate: true,
                        endDate: true,
                    },
                },
            },
        });
        // Generate comparison data for each room
        const comparisonData = rooms.map((room) => {
            const dailyPrices = getDailyPrices(startDate, endDate, room.price, room.peakSeasonRate);
            const priceValues = Object.values(dailyPrices);
            return {
                roomId: room.id,
                name: room.name,
                type: room.type,
                propertyId: room.propertyId,
                basePrice: room.price,
                averagePrice: calculateAveragePrice(dailyPrices),
                minimumPrice: priceValues.length > 0 ? Math.min(...priceValues) : room.price,
                maximumPrice: priceValues.length > 0 ? Math.max(...priceValues) : room.price,
                dailyPrices,
            };
        });
        return comparisonData;
    }
    catch (error) {
        console.error("Error in compareRoomPricing:", error);
        throw error;
    }
});
exports.compareRoomPricingService = compareRoomPricingService;
const getPropertyMonthlyPriceComparisonService = (propertyId, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Set to the first day of the month
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        // Set to the last day of the month
        const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        // Get all rooms for the property
        const rooms = yield prisma_1.default.room.findMany({
            where: {
                propertyId: propertyId,
                isDeleted: false,
            },
            select: {
                id: true,
            },
        });
        if (!rooms || rooms.length === 0) {
            throw new Error(`No rooms found for property with ID ${propertyId}`);
        }
        const roomIds = rooms.map((room) => room.id);
        const comparisonData = yield (0, exports.compareRoomPricingService)(roomIds, startDate, endDate);
        return {
            propertyId: propertyId,
            month: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
            data: comparisonData,
        };
    }
    catch (error) {
        console.error("Error in getPropertyMonthlyPriceComparison:", error);
        throw error;
    }
});
exports.getPropertyMonthlyPriceComparisonService = getPropertyMonthlyPriceComparisonService;
/**
 * Generate calendar data with pricing and availability for each day
 */
function generateCalendarData(startDate, endDate, basePrice, baseStock, peakSeasonRates, nonAvailabilities, reservations) {
    const calendar = {};
    const currentDate = new Date(startDate);
    // Loop through each day in the date range
    while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD format
        // Check if the date falls within a peak season
        const peakRate = peakSeasonRates.find((peak) => new Date(peak.startDate) <= currentDate &&
            new Date(peak.endDate) >= currentDate);
        // Check if the date is marked as unavailable
        const isUnavailableDate = nonAvailabilities.some((period) => new Date(period.startDate) <= currentDate &&
            new Date(period.endDate) >= currentDate);
        // Count reservations for this date to determine remaining stock
        const reservationCount = reservations.filter((reservation) => new Date(reservation.startDate) <= currentDate &&
            new Date(reservation.endDate) > currentDate).length;
        const availableStock = Math.max(0, baseStock - reservationCount);
        calendar[dateKey] = {
            date: new Date(currentDate),
            price: peakRate ? peakRate.price : basePrice,
            isPeakSeason: !!peakRate,
            isAvailable: !isUnavailableDate && availableStock > 0,
            availableStock,
            totalStock: baseStock,
        };
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return calendar;
}
/**
 * Get prices for each day in the date range
 */
function getDailyPrices(startDate, endDate, basePrice, peakSeasonRates) {
    const dailyPrices = {};
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split("T")[0];
        // Check if the date falls within a peak season
        const peakRate = peakSeasonRates.find((peak) => new Date(peak.startDate) <= currentDate &&
            new Date(peak.endDate) >= currentDate);
        dailyPrices[dateKey] = peakRate ? peakRate.price : basePrice;
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dailyPrices;
}
/**
 * Calculate the average price from daily prices
 */
function calculateAveragePrice(dailyPrices) {
    const prices = Object.values(dailyPrices);
    if (prices.length === 0)
        return 0;
    const sum = prices.reduce((total, price) => total + price, 0);
    return Math.round(sum / prices.length);
}
