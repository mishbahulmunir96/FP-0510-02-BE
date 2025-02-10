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
exports.getPeakSeasonsService = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPeakSeasonsService = (query, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take = 10, page = 1, sortBy = "createdAt", sortOrder = "desc", search, price, startDate, endDate, roomId, } = query;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId,
                isDeleted: false,
                user: {
                    role: "TENANT",
                },
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found or unauthorized");
        }
        const whereClause = Object.assign(Object.assign(Object.assign(Object.assign({ isDeleted: false, room: {
                property: {
                    tenantId: tenant.id,
                },
            } }, (roomId && { roomId })), (price && { price })), (startDate && { startDate: { gte: new Date(startDate) } })), (endDate && { endDate: { lte: new Date(endDate) } }));
        const [peakSeasons, total] = yield prisma_1.default.$transaction([
            prisma_1.default.peakSeasonRate.findMany({
                where: whereClause,
                skip: (page - 1) * take,
                take,
                orderBy: { [sortBy]: sortOrder },
                include: {
                    room: true,
                },
            }),
            prisma_1.default.peakSeasonRate.count({ where: whereClause }),
        ]);
        return {
            data: peakSeasons,
            meta: {
                page,
                take,
                total,
                totalPages: Math.ceil(total / take),
            },
        };
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Database error: " + error.message);
        }
        throw error;
    }
});
exports.getPeakSeasonsService = getPeakSeasonsService;
