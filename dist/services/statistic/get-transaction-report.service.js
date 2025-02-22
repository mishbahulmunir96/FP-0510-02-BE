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
// services/statistic/get-transaction-report.service.ts
const prisma_1 = __importDefault(require("../../lib/prisma"));
const date_utils_1 = require("../../utils/date.utils");
const date_fns_1 = require("date-fns");
const groupDataByPeriod = (payments, startDate, endDate) => {
    const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    // Tentukan format pengelompokan berdasarkan rentang waktu
    let groupingFunction;
    if (diffInDays <= 7) {
        // Per hari untuk rentang 7 hari atau kurang
        groupingFunction = (date) => (0, date_fns_1.format)((0, date_utils_1.normalizeToUTC)(date), "yyyy-MM-dd");
    }
    else if (diffInDays <= 31) {
        // Per minggu untuk rentang 31 hari atau kurang
        groupingFunction = (date) => {
            const weekNumber = Math.ceil(date.getDate() / 7);
            return `${(0, date_fns_1.format)((0, date_utils_1.normalizeToUTC)(date), "yyyy-MM")}-W${weekNumber}`;
        };
    }
    else {
        // Per bulan untuk rentang lebih dari 31 hari
        groupingFunction = (date) => (0, date_fns_1.format)((0, date_utils_1.normalizeToUTC)(date), "yyyy-MM");
    }
    // Kelompokkan data
    const groupedData = payments.reduce((acc, payment) => {
        const date = new Date(payment.createdAt);
        const key = groupingFunction(date);
        if (!acc[key]) {
            acc[key] = {
                date: key,
                totalBookings: 0,
                totalRevenue: 0,
            };
        }
        acc[key].totalBookings += 1;
        acc[key].totalRevenue += payment.totalPrice;
        return acc;
    }, {});
    // Konversi ke array dan urutkan berdasarkan tanggal
    return Object.values(groupedData).sort((a, b) => a.date.localeCompare(b.date));
};
const getTransactionReportService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tenantId, startDate, endDate, propertyId, }) {
    try {
        const utcStartDate = (0, date_utils_1.normalizeToUTC)(startDate);
        const utcEndDate = (0, date_utils_1.normalizeToUTC)(endDate);
        // Ambil semua pembayaran dalam rentang waktu
        const payments = yield prisma_1.default.payment.findMany({
            where: {
                createdAt: {
                    gte: utcStartDate,
                    lte: utcEndDate,
                },
                reservation: {
                    some: {
                        room: {
                            property: Object.assign(Object.assign({ tenantId }, (propertyId && { id: propertyId })), { isDeleted: false }),
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
        // Hitung metrik dasar
        const totalTransactions = payments.length;
        const totalRevenue = payments.reduce((sum, payment) => sum + payment.totalPrice, 0);
        const averageTransactionValue = totalTransactions > 0
            ? Number((totalRevenue / totalTransactions).toFixed(2))
            : 0;
        // Hitung distribusi metode pembayaran
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
        // Kelompokkan data berdasarkan periode
        const periodData = groupDataByPeriod(payments, utcStartDate, utcEndDate);
        // Hitung rata-rata durasi booking
        const allReservations = payments.flatMap((p) => p.reservation);
        const durations = allReservations.map((reservation) => {
            const start = (0, date_utils_1.normalizeToUTC)(new Date(reservation.startDate));
            const end = (0, date_utils_1.normalizeToUTC)(new Date(reservation.endDate));
            return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        });
        const averageBookingDuration = durations.length > 0
            ? Number((durations.reduce((sum, duration) => sum + duration, 0) /
                durations.length).toFixed(2))
            : 0;
        // Hitung rata-rata lead time
        const leadTimes = allReservations.map((reservation) => {
            const bookingDate = (0, date_utils_1.normalizeToUTC)(new Date(reservation.createdAt));
            const checkInDate = (0, date_utils_1.normalizeToUTC)(new Date(reservation.startDate));
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
            peakBookingPeriods: periodData,
            averageBookingDuration,
            averageBookingLeadTime,
        };
    }
    catch (error) {
        console.error("Error in getTransactionReportService:", error);
        throw error;
    }
});
exports.getTransactionReportService = getTransactionReportService;
