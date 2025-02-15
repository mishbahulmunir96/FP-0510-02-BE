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
exports.getTransactionsByTenantService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTransactionsByTenantService = (tenantId, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, take, sortBy, sortOrder, startDate, endDate } = query;
        const where = Object.assign({ reservation: {
                every: {
                    room: {
                        property: {
                            tenantId,
                        },
                    },
                },
            } }, (startDate && endDate
            ? {
                createdAt: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            }
            : {}));
        const transactions = yield prisma_1.default.payment.findMany({
            where,
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
                reservation: {
                    include: {
                        room: {
                            include: {
                                property: {
                                    select: {
                                        title: true,
                                        location: true,
                                    },
                                },
                                roomImage: {
                                    where: { isDeleted: false },
                                    select: {
                                        imageUrl: true,
                                    },
                                },
                                roomFacility: {
                                    where: { isDeleted: false },
                                    select: {
                                        title: true,
                                        description: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            skip: (page - 1) * take,
            take,
            orderBy: { [sortBy]: sortOrder },
        });
        const count = yield prisma_1.default.payment.count({
            where: {
                reservation: {
                    some: {
                        room: {
                            property: {
                                tenantId,
                            },
                        },
                    },
                },
            },
        });
        return {
            data: transactions.map((transaction) => {
                const checkInDate = transaction.reservation.length > 0
                    ? transaction.reservation[0].startDate
                    : null;
                const checkOutDate = transaction.reservation.length > 0
                    ? transaction.reservation[transaction.reservation.length - 1]
                        .endDate
                    : null;
                return {
                    id: transaction.id,
                    uuid: transaction.uuid,
                    customer: transaction.user,
                    totalPrice: transaction.totalPrice,
                    paymentMethode: transaction.paymentMethode,
                    status: transaction.status,
                    paymentProof: transaction.paymentProof,
                    checkInDate,
                    checkOutDate,
                    duration: transaction.duration,
                    createdAt: transaction.createdAt,
                    updatedAt: transaction.updatedAt,
                    reservations: transaction.reservation.map((reserv) => ({
                        roomType: reserv.room.type,
                        propertyTitle: reserv.room.property.title,
                        roomPrice: reserv.price,
                        propertyLocation: reserv.room.property.location,
                        roomImages: reserv.room.roomImage,
                        roomFacilities: reserv.room.roomFacility,
                    })),
                };
            }),
            meta: { page, take, total: count },
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getTransactionsByTenantService = getTransactionsByTenantService;
