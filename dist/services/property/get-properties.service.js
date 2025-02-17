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
    const { take = 1, // Nilai default untuk jumlah item per halaman
    page = 1, sortBy = "createdAt", sortOrder = "asc", location, category, search, startDate, endDate, guest, } = query;
    // Validasi tanggal: jika salah satu tanggal diberikan, kedua tanggal harus ada dan valid
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
    // Membangun whereClause untuk filter properti
    const whereClause = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ isDeleted: false, status: "PUBLISHED" }, (location && { location: { contains: location, mode: "insensitive" } })), (category && {
        // Filter berdasarkan relasi PropertyCategory
        PropertyCategory: {
            some: {
                name: { contains: category, mode: "insensitive" },
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
    })), (startDate &&
        endDate && {
        // Filter properti berdasarkan tanggal pembuatan (misalnya, sebelum endDate)
        createdAt: {
            lte: new Date(endDate),
        },
        room: {
            some: Object.assign(Object.assign({ isDeleted: false }, (guest && { guest: { gte: guest } })), { 
                // Pastikan tidak ada reservasi yang tumpang tindih dengan periode yang dipilih
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
                // Pastikan tidak ada jadwal non-availability room yang tumpang tindih
                roomNonAvailability: {
                    none: {
                        isDeleted: false,
                        startDate: { lte: new Date(endDate) },
                        endDate: { gte: new Date(startDate) },
                    },
                } }),
        },
    }));
    // Membatasi field yang diizinkan untuk sorting
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
                propertyCategory: true, // Tambahkan ini
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
