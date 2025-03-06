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
exports.getRoomNonAvailabilitiesService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getRoomNonAvailabilitiesService = (query, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take = 10, page = 1, sortBy = "createdAt", sortOrder = "asc", search, reason, startDate, endDate, roomId, } = query;
        const user = yield prisma_1.default.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User don't have access");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const whereClause = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ isDeleted: false, room: { property: { tenantId: tenant.id } } }, (roomId ? { roomId } : {})), (reason ? { reason: { contains: reason, mode: "insensitive" } } : {})), (search
            ? {
                OR: [{ reason: { contains: search, mode: "insensitive" } }],
            }
            : {})), (startDate ? { startDate: { gte: new Date(startDate) } } : {})), (endDate ? { endDate: { lte: new Date(endDate) } } : {}));
        const roomNonAvailabilities = yield prisma_1.default.roomNonAvailability.findMany({
            where: whereClause,
            skip: (page - 1) * take,
            take: take,
            orderBy: { [sortBy]: sortOrder },
            include: { room: true },
        });
        const count = yield prisma_1.default.roomNonAvailability.count({
            where: whereClause,
        });
        return { data: roomNonAvailabilities, meta: { page, take, total: count } };
    }
    catch (error) {
        throw error;
    }
});
exports.getRoomNonAvailabilitiesService = getRoomNonAvailabilitiesService;
