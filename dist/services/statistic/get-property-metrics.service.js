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
exports.getPropertyMetricsService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const dateUtils_1 = require("../../utils/dateUtils");
const getPropertyMetricsService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tenantId, startDate, endDate, propertyId, }) {
    const utcStartDate = (0, dateUtils_1.normalizeToUTC)(startDate);
    const utcEndDate = (0, dateUtils_1.normalizeToUTC)(endDate);
    const properties = yield prisma_1.default.property.findMany({
        where: Object.assign(Object.assign({ tenantId }, (propertyId && { id: propertyId })), { isDeleted: false }),
        include: {
            room: {
                where: {
                    isDeleted: false,
                },
                include: {
                    reservation: {
                        where: {
                            payment: {
                                createdAt: {
                                    gte: utcStartDate,
                                    lte: utcEndDate,
                                },
                            },
                        },
                        include: {
                            payment: true,
                        },
                    },
                },
            },
            review: {
                where: {
                    createdAt: {
                        gte: utcStartDate,
                        lte: utcEndDate,
                    },
                },
                select: {
                    rating: true,
                },
            },
        },
    });
    const propertyMetrics = yield Promise.all(properties.map((property) => __awaiter(void 0, void 0, void 0, function* () {
        const allReservations = property.room.flatMap((room) => room.reservation);
        const paymentGroups = allReservations.reduce((groups, reservation) => {
            const paymentId = reservation.payment.id;
            if (!groups[paymentId]) {
                groups[paymentId] = {
                    payment: reservation.payment,
                    reservations: [],
                };
            }
            groups[paymentId].reservations.push(reservation);
            return groups;
        }, {});
        const totalRevenue = Object.values(paymentGroups).reduce((sum, group) => sum + group.payment.totalPrice, 0);
        const totalTransactions = Object.keys(paymentGroups).length;
        const totalDays = Math.ceil((utcEndDate.getTime() - utcStartDate.getTime()) / (1000 * 60 * 60 * 24));
        const totalRooms = property.room.reduce((sum, room) => sum + room.stock, 0);
        const totalPossibleRoomDays = totalRooms * totalDays;
        const occupiedRoomDays = allReservations.reduce((total, reservation) => {
            const checkIn = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.startDate));
            const checkOut = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.endDate));
            const effectiveStartDate = checkIn < utcStartDate ? utcStartDate : checkIn;
            const effectiveEndDate = checkOut > utcEndDate ? utcEndDate : checkOut;
            const stayDuration = Math.ceil((effectiveEndDate.getTime() - effectiveStartDate.getTime()) /
                (1000 * 60 * 60 * 24));
            return total + stayDuration;
        }, 0);
        const occupancyRate = totalPossibleRoomDays > 0
            ? Math.max(0, Number(((occupiedRoomDays / totalPossibleRoomDays) * 100).toFixed(2)))
            : 0;
        const averageRating = property.review.length > 0
            ? Number((property.review.reduce((sum, review) => sum + review.rating, 0) / property.review.length).toFixed(2))
            : 0;
        const roomDetails = property.room.map((room) => {
            const roomReservations = room.reservation;
            const totalBookings = roomReservations.length;
            const roomPaymentGroups = roomReservations.reduce((groups, reservation) => {
                const paymentId = reservation.payment.id;
                if (!groups[paymentId]) {
                    groups[paymentId] = {
                        payment: reservation.payment,
                        reservations: [],
                    };
                }
                groups[paymentId].reservations.push(reservation);
                return groups;
            }, {});
            const roomRevenue = Object.values(roomPaymentGroups).reduce((sum, group) => {
                if (group.reservations.length === 1) {
                    return sum + group.payment.totalPrice;
                }
                const paymentTotal = group.payment.totalPrice;
                const reservationTotal = group.reservations.reduce((total, res) => total + res.price, 0);
                const roomReservationTotal = group.reservations
                    .filter((res) => res.roomId === room.id)
                    .reduce((total, res) => total + res.price, 0);
                return (sum + (paymentTotal * roomReservationTotal) / reservationTotal);
            }, 0);
            const stayDurations = roomReservations.map((reservation) => {
                const start = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.startDate));
                const end = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.endDate));
                return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            });
            const averageStayDuration = stayDurations.length > 0
                ? Number((stayDurations.reduce((sum, duration) => sum + duration, 0) /
                    stayDurations.length).toFixed(2))
                : 0;
            return {
                roomId: room.id,
                roomType: room.type,
                totalBookings,
                totalRevenue: roomRevenue,
                averageStayDuration,
                stock: room.stock,
            };
        });
        const bestPerformingRooms = [...roomDetails]
            .sort((a, b) => b.totalBookings - a.totalBookings)
            .slice(0, 5)
            .map((room) => ({
            roomId: room.roomId,
            roomType: room.roomType,
            totalBookings: room.totalBookings,
            stock: room.stock,
        }));
        return {
            propertyId: property.id,
            propertyName: property.title,
            totalRevenue,
            totalTransactions,
            occupancyRate,
            averageRating,
            roomDetails,
            bestPerformingRooms,
            totalRooms: property.room.reduce((total, room) => total + room.stock, 0),
        };
    })));
    return propertyMetrics;
});
exports.getPropertyMetricsService = getPropertyMetricsService;
