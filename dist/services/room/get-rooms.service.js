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
exports.getRoomsService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getRoomsService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take, page, sortBy, sortOrder, search } = query;
        const whereClause = {
            isDeleted: false,
        };
        if (search) {
            const allowedTypes = [
                "Deluxe",
                "Standard",
                "Suite",
            ];
            if (allowedTypes.includes(search)) {
                whereClause.type = {
                    equals: search,
                };
            }
        }
        const rooms = yield prisma_1.default.room.findMany({
            where: whereClause,
            skip: (page - 1) * take,
            take: take,
            orderBy: { [sortBy]: sortOrder || "asc" },
            include: {
                roomFacility: true,
                roomImage: true,
                roomNonAvailability: true,
                peakSeasonRate: true,
                reservation: true,
                property: true,
            },
        });
        const count = yield prisma_1.default.room.count({ where: whereClause });
        return { data: rooms, meta: { page, take, total: count } };
    }
    catch (error) {
        throw error;
    }
});
exports.getRoomsService = getRoomsService;
