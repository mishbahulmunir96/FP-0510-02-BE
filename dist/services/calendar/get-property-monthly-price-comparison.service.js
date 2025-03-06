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
exports.getPropertyMonthlyPriceComparisonService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const compare_room_pricing_service_1 = require("./compare-room-pricing-service");
const getPropertyMonthlyPriceComparisonService = (propertyId, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
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
        const comparisonData = yield (0, compare_room_pricing_service_1.compareRoomPricingService)(roomIds, startDate, endDate);
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
