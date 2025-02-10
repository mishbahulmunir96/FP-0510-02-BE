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
exports.getTransactionReportService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getTransactionReportService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tenantId, startDate, endDate, }) {
    try {
        const payments = yield prisma_1.default.payment.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate,
                },
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
                reservation: {
                    include: {
                        room: true,
                    },
                },
            },
        });
        // Calculate basic metrics
        const totalTransactions = payments.length;
        const totalRevenue = payments.reduce((sum, payment) => sum + payment.totalPrice, 0);
        const averageTransactionValue = totalTransactions > 0
            ? Number((totalRevenue / totalTransactions).toFixed(2))
            : 0;
        // Calculate payment method distribution
        const paymentMethods = payments.reduce((acc, payment) => {
            acc[payment.paymentMethode].count += 1;
            return acc;
        }, {
            MANUAL: { count: 0, percentage: 0 },
            OTOMATIS: { count: 0, percentage: 0 },
        });
        paymentMethods.MANUAL.percentage = Number(((paymentMethods.MANUAL.count / totalTransactions) * 100).toFixed(2));
        paymentMethods.OTOMATIS.percentage = Number(((paymentMethods.OTOMATIS.count / totalTransactions) * 100).toFixed(2));
        // Calculate payment status breakdown
        const successfulPayments = payments.filter((p) => ["CHECKED_IN", "CHECKED_OUT"].includes(p.status)).length;
        const cancelledPayments = payments.filter((p) => p.status === "CANCELLED").length;
        const pendingPayments = payments.filter((p) => [
            "WAITING_FOR_PAYMENT",
            "WAITING_FOR_PAYMENT_CONFIRMATION",
            "PROCESSED",
        ].includes(p.status)).length;
        const paymentStatusBreakdown = {
            successRate: Number(((successfulPayments / totalTransactions) * 100).toFixed(2)),
            cancellationRate: Number(((cancelledPayments / totalTransactions) * 100).toFixed(2)),
            pendingRate: Number(((pendingPayments / totalTransactions) * 100).toFixed(2)),
            totalSuccessful: successfulPayments,
            totalCancelled: cancelledPayments,
            totalPending: pendingPayments,
        };
        // Calculate peak booking periods (grouped by date)
        const bookingsByDate = payments.reduce((acc, payment) => {
            const date = payment.createdAt.toISOString().split("T")[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});
        const peakBookingPeriods = Object.entries(bookingsByDate)
            .map(([date, totalBookings]) => ({ date, totalBookings }))
            .sort((a, b) => b.totalBookings - a.totalBookings)
            .slice(0, 5);
        // Calculate average booking duration
        const allReservations = payments.flatMap((p) => p.reservation);
        const durations = allReservations.map((reservation) => {
            const start = new Date(reservation.startDate);
            const end = new Date(reservation.endDate);
            return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        });
        const averageBookingDuration = durations.length > 0
            ? Number((durations.reduce((sum, duration) => sum + duration, 0) /
                durations.length).toFixed(2))
            : 0;
        // Calculate average lead time (time between booking and check-in)
        const leadTimes = allReservations.map((reservation) => {
            const bookingDate = new Date(reservation.createdAt);
            const checkInDate = new Date(reservation.startDate);
            return Math.ceil((checkInDate.getTime() - bookingDate.getTime()) / (1000 * 60 * 60 * 24));
        });
        const averageBookingLeadTime = leadTimes.length > 0
            ? Number((leadTimes.reduce((sum, time) => sum + time, 0) / leadTimes.length).toFixed(2))
            : 0;
        return {
            totalTransactions,
            totalRevenue,
            averageTransactionValue,
            paymentMethodDistribution: paymentMethods,
            paymentStatusBreakdown,
            peakBookingPeriods,
            averageBookingDuration,
            averageBookingLeadTime,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getTransactionReportService = getTransactionReportService;
