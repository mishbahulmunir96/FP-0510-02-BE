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
    const { page, take, sortBy, sortOrder } = query;
    const transactions = yield prisma_1.default.payment.findMany({
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
            var _a, _b;
            return ({
                id: transaction.id,
                uuid: transaction.uuid,
                customer: transaction.user,
                totalPrice: transaction.totalPrice,
                status: transaction.status,
                duration: transaction.duration,
                checkIn: (_a = transaction.reservation[0]) === null || _a === void 0 ? void 0 : _a.startDate,
                checkOut: (_b = transaction.reservation[0]) === null || _b === void 0 ? void 0 : _b.endDate,
                createdAt: transaction.createdAt,
                reservations: transaction.reservation.map((reserv) => ({
                    roomType: reserv.room.type,
                    propertyTitle: reserv.room.property.title,
                    propertyLocation: reserv.room.property.location,
                })),
            });
        }),
        meta: { page, take, total: count },
    };
});
exports.getTransactionsByTenantService = getTransactionsByTenantService;
