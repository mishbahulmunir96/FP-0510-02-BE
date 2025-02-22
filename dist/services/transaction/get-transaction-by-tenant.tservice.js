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
exports.getTransactionByTenantService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTransactionByTenantService = (id, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield prisma_1.default.payment.findFirst({
            where: {
                id,
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
                        imageUrl: true,
                    },
                },
                reservation: {
                    include: {
                        room: {
                            include: {
                                property: {
                                    include: {
                                        propertyImage: true,
                                    },
                                },
                                roomImage: {
                                    where: {
                                        isDeleted: false,
                                    },
                                    select: {
                                        imageUrl: true,
                                    },
                                },
                                roomFacility: {
                                    where: { isDeleted: false },
                                    select: { title: true },
                                },
                                peakSeasonRate: {
                                    where: { isDeleted: false },
                                    select: {
                                        price: true,
                                        startDate: true,
                                        endDate: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!transaction) {
            throw new Error("Transaction not found");
        }
        let peakSeasonDays = 0;
        let peakSeasonPrice = null;
        for (const reserv of transaction.reservation) {
            if (reserv.price > reserv.room.price) {
                peakSeasonDays++;
                if (!peakSeasonPrice) {
                    peakSeasonPrice = reserv.price;
                }
            }
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
            customer: transaction.user,
            totalPrice: transaction.totalPrice,
            paymentMethode: transaction.paymentMethode,
            status: transaction.status,
            paymentProof: transaction.paymentProof,
            checkInDate,
            checkOutDate,
            peakSeasonDays: peakSeasonDays > 0 ? peakSeasonDays : undefined,
            peakSeasonPrice: peakSeasonPrice,
            duration: transaction.duration,
            updatedAt: transaction.updatedAt,
            reservations: transaction.reservation.map((reserv) => {
                return {
                    roomId: reserv.room.id,
                    roomType: reserv.room.type,
                    propertyTitle: reserv.room.property.title,
                    roomPrice: reserv.price,
                    propertyLocation: reserv.room.property.location,
                    propertyImages: reserv.room.property.propertyImage.map((image) => image.imageUrl),
                    roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
                    roomFacilities: reserv.room.roomFacility.map((facility) => facility.title),
                };
            }),
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getTransactionByTenantService = getTransactionByTenantService;
