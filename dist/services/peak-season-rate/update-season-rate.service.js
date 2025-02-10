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
exports.updatePeakSeasonRateManagementService = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const client_1 = require("../../../prisma/generated/client");
const updatePeakSeasonRateManagementService = (userId, id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { price, startDate, endDate, roomId } = body;
        const peakSeason = yield prisma_1.default.peakSeasonRate.findUnique({
            where: { id },
            include: {
                room: {
                    include: {
                        property: {
                            include: {
                                tenant: true,
                            },
                        },
                    },
                },
            },
        });
        if (!peakSeason) {
            throw new Error("Peak Season Rate not found");
        }
        if (peakSeason.room.property.tenant.userId !== userId) {
            throw new Error("Unauthorized: Peak Season Rate does not belong to this tenant");
        }
        if (startDate && endDate) {
            const otherPeakSeasons = yield prisma_1.default.peakSeasonRate.findMany({
                where: {
                    roomId: peakSeason.roomId,
                    id: { not: id },
                },
            });
            const inputDate = { start: new Date(startDate), end: new Date(endDate) };
            otherPeakSeasons.forEach((item) => {
                const areOverlap = (0, date_fns_1.areIntervalsOverlapping)(inputDate, {
                    start: new Date(item.startDate),
                    end: new Date(item.endDate),
                });
                if (areOverlap) {
                    throw new Error("Peak Season Rate already exists for this date range");
                }
            });
        }
        const updatedPeakSeason = yield prisma_1.default.peakSeasonRate.update({
            where: { id },
            data: body,
        });
        return {
            message: "Peak Season Rate updated successfully",
            data: updatedPeakSeason,
        };
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Database error: " + error.message);
        }
        throw error;
    }
});
exports.updatePeakSeasonRateManagementService = updatePeakSeasonRateManagementService;
