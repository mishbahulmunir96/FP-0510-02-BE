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
exports.getTransactionMetricsService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const dateUtils_1 = require("../../utils/dateUtils");
const getTransactionMetricsService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ propertyIds, startDate, endDate, }) {
    const utcStartDate = (0, dateUtils_1.normalizeToUTC)(startDate);
    const utcEndDate = (0, dateUtils_1.normalizeToUTC)(endDate);
    const payments = yield prisma_1.default.payment.findMany({
        where: {
            createdAt: {
                gte: utcStartDate,
                lte: utcEndDate,
            },
            reservation: {
                some: {
                    room: {
                        property: {
                            id: { in: propertyIds },
                            isDeleted: false,
                        },
                    },
                },
            },
        },
        include: {
            reservation: {
                include: {
                    room: true,
                    payment: true,
                },
            },
        },
    });
    const totalTransactions = payments.length;
    const totalRevenue = payments.reduce((sum, payment) => sum + payment.totalPrice, 0);
    const averageTransactionValue = totalTransactions > 0
        ? Number((totalRevenue / totalTransactions).toFixed(2))
        : 0;
    const paymentMethods = payments.reduce((acc, payment) => {
        acc[payment.paymentMethode].count += 1;
        return acc;
    }, {
        MANUAL: { count: 0, percentage: 0 },
        OTOMATIS: { count: 0, percentage: 0 },
    });
    if (totalTransactions > 0) {
        paymentMethods.MANUAL.percentage = Number(((paymentMethods.MANUAL.count / totalTransactions) * 100).toFixed(2));
        paymentMethods.OTOMATIS.percentage = Number(((paymentMethods.OTOMATIS.count / totalTransactions) * 100).toFixed(2));
    }
    const successfulPayments = payments.filter((p) => ["CHECKED_IN", "PROCESSED", "CHECKED_OUT"].includes(p.status)).length;
    const cancelledPayments = payments.filter((p) => p.status === "CANCELLED").length;
    const pendingPayments = payments.filter((p) => ["WAITING_FOR_PAYMENT", "WAITING_FOR_PAYMENT_CONFIRMATION"].includes(p.status)).length;
    const paymentStatusBreakdown = {
        successRate: totalTransactions > 0
            ? Number(((successfulPayments / totalTransactions) * 100).toFixed(2))
            : 0,
        cancellationRate: totalTransactions > 0
            ? Number(((cancelledPayments / totalTransactions) * 100).toFixed(2))
            : 0,
        pendingRate: totalTransactions > 0
            ? Number(((pendingPayments / totalTransactions) * 100).toFixed(2))
            : 0,
        totalSuccessful: successfulPayments,
        totalCancelled: cancelledPayments,
        totalPending: pendingPayments,
    };
    const peakBookingPeriods = (0, dateUtils_1.groupDataByPeriod)(payments, utcStartDate, utcEndDate);
    const allReservations = payments.flatMap((p) => p.reservation);
    const durations = allReservations.map((reservation) => {
        const start = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.startDate));
        const end = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.endDate));
        return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    });
    const averageBookingDuration = durations.length > 0
        ? Number((durations.reduce((sum, duration) => sum + duration, 0) /
            durations.length).toFixed(2))
        : 0;
    const leadTimes = allReservations.map((reservation) => {
        const bookingDate = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.payment.createdAt));
        const checkInDate = (0, dateUtils_1.normalizeToUTC)(new Date(reservation.startDate));
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
});
exports.getTransactionMetricsService = getTransactionMetricsService;
