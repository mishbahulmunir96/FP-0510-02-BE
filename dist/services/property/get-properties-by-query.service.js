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
exports.getPropertiesServiceByQuery = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPropertiesServiceByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { take, page, sortBy, sortOrder, search, guest, title, startDate, endDate, name, price, } = query;
        const roomConditions = Object.assign(Object.assign({ stock: { gt: 0 } }, (guest ? { guest: { gte: guest } } : {})), (price ? { price: { lte: price } } : {}));
        if (startDate && endDate) {
            roomConditions.roomNonAvailability = {
                none: {
                    AND: [
                        {
                            startDate: { lte: endDate },
                            endDate: { gte: startDate },
                        },
                    ],
                },
            };
        }
        const whereClause = {
            isDeleted: false,
            status: "PUBLISHED",
            room: {
                some: roomConditions,
            },
        };
        if (name) {
            whereClause.propertyCategory = {
                name: { equals: name, mode: "insensitive" },
            };
        }
        if (title) {
            whereClause.title = { contains: title, mode: "insensitive" };
        }
        if (search) {
            whereClause.OR = [
                { title: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                { location: { contains: search, mode: "insensitive" } },
            ];
        }
        const propertiesByQuery = yield prisma_1.default.property.findMany({
            where: whereClause,
            skip: Math.max(0, (page - 1) * take),
            take: take,
            orderBy: sortBy
                ? { [sortBy]: sortOrder || "asc" }
                : { createdAt: "desc" },
            include: {
                propertyImage: {
                    select: { imageUrl: true },
                    where: { isDeleted: false },
                },
                review: {
                    select: { rating: true },
                },
                tenant: {
                    select: { name: true, imageUrl: true },
                },
                room: {
                    where: { isDeleted: false },
                    include: {
                        roomImage: {
                            select: { imageUrl: true },
                            where: { isDeleted: false },
                        },
                        roomFacility: {
                            where: { isDeleted: false },
                        },
                    },
                },
                propertyCategory: true,
                propertyFacility: {
                    where: { isDeleted: false },
                },
            },
        });
        const count = yield prisma_1.default.property.count({ where: whereClause });
        return Object.assign({ data: propertiesByQuery, meta: {
                page,
                take,
                total: count,
                totalPages: Math.ceil(count / take),
            } }, (process.env.NODE_ENV !== "production" ? { whereClause } : {}));
    }
    catch (error) {
        throw error;
    }
});
exports.getPropertiesServiceByQuery = getPropertiesServiceByQuery;
