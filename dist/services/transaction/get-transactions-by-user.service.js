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
exports.getTransactionsByUserService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTransactionsByUserService = (userId, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, take, sortBy, sortOrder, startDate, endDate } = query;
        const where = Object.assign({ userId }, (startDate && endDate
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
                reservation: {
                    include: {
                        room: {
                            include: {
                                property: {
                                    select: {
                                        title: true,
                                        location: true,
                                        tenant: {
                                            select: {
                                                id: true,
                                                name: true,
                                                imageUrl: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            skip: (page - 1) * take,
            take: take,
            orderBy: { [sortBy]: sortOrder },
        });
        const count = yield prisma_1.default.payment.count({
            where: { userId },
        });
        return {
            data: transactions.map((transaction) => {
                var _a;
                const checkInDate = transaction.reservation.length > 0
                    ? transaction.reservation[0].startDate
                    : null;
                const checkOutDate = transaction.reservation.length > 0
                    ? transaction.reservation[transaction.reservation.length - 1]
                        .endDate
                    : null;
                const tenant = (_a = transaction.reservation[0]) === null || _a === void 0 ? void 0 : _a.room.property.tenant;
                return {
                    id: transaction.id,
                    uuid: transaction.uuid,
                    totalPrice: transaction.totalPrice,
                    duration: transaction.duration,
                    createdAt: transaction.createdAt,
                    updatedAt: transaction.updatedAt,
                    checkInDate,
                    checkOutDate,
                    status: transaction.status,
                    reservations: transaction.reservation.map((reserv) => ({
                        roomType: reserv.room.type,
                        propertyTitle: reserv.room.property.title,
                        propertyLocation: reserv.room.property.location,
                        tenant: tenant
                            ? {
                                id: tenant.id,
                                name: tenant.name,
                                imageUrl: tenant.imageUrl,
                            }
                            : null,
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
exports.getTransactionsByUserService = getTransactionsByUserService;
