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
    const { take = 1, // Default value
    page = 1, sortBy = "createdAt", sortOrder = "asc", location, category, search, startDate, endDate, guest, } = query;
    // Date validation
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
    const whereClause = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ isDeleted: false, status: "PUBLISHED" }, (location && { location: { contains: location, mode: "insensitive" } })), (category && { category: { contains: category, mode: "insensitive" } })), (search && {
        OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
        ],
    })), (guest && {
        room: {
            some: {
                guest: {
                    gte: guest,
                },
                isDeleted: false,
            },
        },
    })), (startDate &&
        endDate && {
        createdAt: {
            lte: new Date(endDate),
        },
        room: {
            some: {
                isDeleted: false,
                guest: guest
                    ? {
                        gte: guest,
                    }
                    : undefined,
                // Check for existing reservations
                reservation: {
                    none: {
                        AND: [
                            {
                                payment: {
                                    status: {
                                        in: ["WAITING_FOR_PAYMENT_CONFIRMATION", "PROCESSED"],
                                    },
                                },
                            },
                            {
                                startDate: { lte: new Date(endDate) },
                                endDate: { gte: new Date(startDate) },
                            },
                        ],
                    },
                },
                // Check room non-availability dates
                roomNonAvailability: {
                    none: {
                        isDeleted: false,
                        date: {
                            gte: new Date(startDate),
                            lte: new Date(endDate),
                        },
                    },
                },
            },
        },
    }));
    const allowedSortByFields = ["createdAt", "updatedAt", "title", "location", "category"];
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
                propertyImage: true,
                propertyFacility: true,
                tenant: true,
                room: {
                    include: {
                        roomImage: true,
                        roomFacility: true,
                        peakSeasonRate: true,
                        reservation: {
                            include: {
                                payment: true,
                            },
                        },
                        roomNonAvailability: {
                            where: {
                                isDeleted: false,
                            },
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
