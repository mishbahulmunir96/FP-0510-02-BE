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
exports.getPropertiesService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPropertiesService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { take = 8, page = 1, sortBy = "createdAt", sortOrder = "desc", location, category, search, startDate, endDate, guest, priceMin, priceMax, } = query;
<<<<<<< HEAD
=======

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
    if ((startDate && !endDate) || (!startDate && endDate)) {
        throw new Error("Both startDate and endDate are required for filtering");
    }
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            throw new Error("Invalid date format for startDate or endDate");
        }
        if (start > end) {
            throw new Error("startDate cannot be after endDate");
        }
    }
    const whereClause = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ isDeleted: false, status: "PUBLISHED" }, (location && {
        location: {
            contains: location,
            mode: "insensitive",
        },
    })), (category && {
        propertyCategory: {
            name: {
                contains: category,
                mode: "insensitive",
            },
        },
    })), (search && {
        OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
        ],
    })), (guest && {
        room: {
            some: {
                guest: { gte: guest },
                isDeleted: false,
            },
        },
    })), (priceMin && {
        room: {
            some: {
                price: { gte: priceMin },
                isDeleted: false,
            },
        },
    })), (priceMax && {
        room: {
            some: {
                price: { lte: priceMax },
                isDeleted: false,
            },
        },
    })), (startDate &&
        endDate && {
        room: {
            some: Object.assign(Object.assign({ isDeleted: false }, (guest && { guest: { gte: guest } })), { reservation: {
                    none: {
                        AND: [
                            {
                                payment: {
                                    status: {
                                        in: [
                                            "WAITING_FOR_PAYMENT_CONFIRMATION",
                                            "PROCESSED",
                                            "CHECKED_IN",
                                        ],
                                    },
                                },
                            },
                            {
                                startDate: { lte: new Date(endDate) },
                                endDate: { gte: new Date(startDate) },
                            },
                        ],
                    },
                }, roomNonAvailability: {
                    none: {
                        isDeleted: false,
                        startDate: { lte: new Date(endDate) },
                        endDate: { gte: new Date(startDate) },
                    },
                } }),
        },
    }));
    const allowedSortByFields = ["createdAt", "updatedAt", "title", "location"];
    const sortField = allowedSortByFields.includes(sortBy)
        ? sortBy
        : "createdAt";
    const orderByClause = {
        [sortField]: sortOrder,
    };
    const skip = (page - 1) * take;
    const [properties, totalCount] = yield Promise.all([
        prisma_1.default.property.findMany({
            where: whereClause,
            skip,
            take,
            orderBy: orderByClause,
            include: {
                propertyCategory: true,
                propertyImage: {
                    where: { isDeleted: false },
                },
                propertyFacility: {
                    where: { isDeleted: false },
                },
                tenant: true,
                room: {
                    where: { isDeleted: false },
                    include: {
                        roomImage: {
                            where: { isDeleted: false },
                        },
                        roomFacility: {
                            where: { isDeleted: false },
                        },
                        peakSeasonRate: {
                            where: { isDeleted: false },
                        },
                        reservation: {
                            include: {
                                payment: true,
                            },
                        },
                        roomNonAvailability: {
                            where: { isDeleted: false },
                        },
                    },
                },
            },
        }),
        prisma_1.default.property.count({ where: whereClause }),
    ]);
    return {
        data: properties,
        meta: {
            totalCount,
            page,
            take,
        },
    };
});
exports.getPropertiesService = getPropertiesService;
