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
exports.deletePeakSeasonRateManagementService = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deletePeakSeasonRateManagementService = (userId, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
        const deletedPeakSeason = yield prisma_1.default.peakSeasonRate.delete({
            where: { id },
        });
        return {
            message: "Peak Season Rate deleted successfully",
            data: deletedPeakSeason,
        };
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Database error: " + error.message);
        }
        throw error;
    }
});
exports.deletePeakSeasonRateManagementService = deletePeakSeasonRateManagementService;
