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
        const { page, take, sortBy, sortOrder } = query;
        const transactions = yield prisma_1.default.payment.findMany({
            where: { userId },
            include: {
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
        if (transactions.length === 0) {
            throw new Error("No transactions found for this user.");
        }
        return {
            data: transactions.map((transaction) => {
                const checkInDate = transaction.reservation.length > 0
                    ? transaction.reservation[0].startDate
                    : null;
                const checkOutDate = transaction.reservation.length > 0
                    ? transaction.reservation[transaction.reservation.length - 1]
                        .endDate
                    : null;
                const firstReservation = transaction.reservation[0];
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
