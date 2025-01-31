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
exports.getTransactionByUserService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTransactionByUserService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield prisma_1.default.payment.findUnique({
            where: { id },
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
                                roomImage: {
                                    select: {
                                        imageUrl: true,
                                    },
                                },
                                roomFacility: {
                                    where: {
                                        isDeleted: false,
                                    },
                                    select: {
                                        title: true,
                                    },
                                },
                                peakSeasonRate: {
                                    where: {
                                        isDeleted: false,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!transaction) {
            throw new Error("Invalid transaction id");
        }
        if (transaction.userId !== userId) {
            throw new Error("You do not have permission to view this transaction.");
        }
        const checkInDate = transaction.reservation.length > 0
            ? transaction.reservation[0].startDate
            : null;
        const checkOutDate = transaction.reservation.length > 0
            ? transaction.reservation[transaction.reservation.length - 1].endDate
            : null;
        return {
            id: transaction.id,
            uuid: transaction.uuid,
            userId: transaction.userId,
            totalPrice: transaction.totalPrice,
            paymentMethode: transaction.paymentMethode,
            status: transaction.status,
            paymentProof: transaction.paymentProof,
            checkInDate,
            checkOutDate,
            duration: transaction.duration,
            updatedAt: transaction.updatedAt,
            reservations: transaction.reservation.map((reserv) => ({
                roomType: reserv.room.type,
                propertyTitle: reserv.room.property.title,
                roomPrice: reserv.room.price,
                propertyLocation: reserv.room.property.location,
                roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
                roomFacilities: reserv.room.roomFacility.map((facility) => facility.title),
            })),
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getTransactionByUserService = getTransactionByUserService;
