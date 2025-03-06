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
exports.compareRoomPricingService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const calendar_utils_1 = require("../../utils/calendar.utils");
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
        const comparisonData = rooms.map((room) => {
            const dailyPrices = (0, calendar_utils_1.getDailyPrices)(startDate, endDate, room.price, room.peakSeasonRate);
            const priceValues = Object.values(dailyPrices);
            return {
                roomId: room.id,
                name: room.name,
                type: room.type,
                propertyId: room.propertyId,
                basePrice: room.price,
                averagePrice: (0, calendar_utils_1.calculateAveragePrice)(dailyPrices),
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
