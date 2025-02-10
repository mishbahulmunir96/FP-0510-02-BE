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
exports.createPeakSeasonRateManagementService = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const client_1 = require("../../../prisma/generated/client");
const createPeakSeasonRateManagementService = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { price, startDate, endDate, roomId } = body;
        if (new Date(startDate) > new Date(endDate)) {
            throw new Error("Start date must be before end date");
        }
        if (price <= 0) {
            throw new Error("Price must be greater than 0");
        }
        const room = yield prisma_1.default.room.findFirst({
            where: { id: roomId },
            include: {
                property: {
                    include: {
                        tenant: true,
                    },
                },
            },
        });
        if (!room) {
            throw new Error("Room not found");
        }
        if (room.property.tenant.userId !== userId) {
            throw new Error("Unauthorized: Room does not belong to this tenant");
        }
        const getPeakSeason = yield prisma_1.default.peakSeasonRate.findMany({
            where: {
                roomId,
                isDeleted: false,
            },
        });
        const inputDate = { start: new Date(startDate), end: new Date(endDate) };
        getPeakSeason.forEach((item) => {
            const areOverlap = (0, date_fns_1.areIntervalsOverlapping)(inputDate, {
                start: new Date(item.startDate),
                end: new Date(item.endDate),
            });
            if (areOverlap) {
                throw new Error("Peak Season Rate already exists for this date range");
            }
        });
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const newPeakSeason = yield tx.peakSeasonRate.create({
                data: {
                    roomId,
                    price,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                },
            });
            return {
                message: "Peak Season Rate created successfully",
                data: newPeakSeason,
            };
        }));
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Database error: " + error.message);
        }
        throw error;
    }
});
exports.createPeakSeasonRateManagementService = createPeakSeasonRateManagementService;
