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
exports.createRoomReservationService = void 0;
const client_1 = require("../../../prisma/generated/client");
const checkRoomAvailability_1 = require("../../lib/checkRoomAvailability");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const node_schedule_1 = __importDefault(require("node-schedule"));
const date_fns_1 = require("date-fns");
const xendit_1 = __importDefault(require("../../lib/xendit"));
const createRoomReservationService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, roomId, startDate, endDate, paymentMethode } = body;
        const isAvailable = yield (0, checkRoomAvailability_1.checkRoomAvailability)(roomId, startDate, endDate);
        if (!isAvailable) {
            throw new Error("The room is not available on the selected date.");
        }
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            throw new Error("The reservation duration must be at least 1 night.");
        }
        const room = yield prisma_1.default.room.findUnique({
            where: { id: roomId },
            select: { price: true },
        });
        if (!room || room.price === undefined) {
            throw new Error("Room price not found.");
        }
        let totalPrice = 0;
        for (let i = 0; i < diffDays; i++) {
            const currentDate = new Date(start);
            currentDate.setDate(currentDate.getDate() + i);
            const peakRate = yield prisma_1.default.peakSeasonRate.findFirst({
                where: {
                    roomId: roomId,
                    startDate: { lte: currentDate },
                    endDate: { gte: currentDate },
                    isDeleted: false,
                },
            });
            if (peakRate) {
                totalPrice += peakRate.price;
            }
            else {
                totalPrice += room.price;
            }
        }
        let payment;
        if (paymentMethode === "OTOMATIS") {
            const user = yield prisma_1.default.user.findUnique({
                where: { id: userId },
                select: { email: true },
            });
            payment = yield prisma_1.default.payment.create({
                data: {
                    userId,
                    totalPrice,
                    duration: diffDays,
                    paymentMethode: "OTOMATIS",
                    paymentProof: null,
                    status: client_1.StatusPayment.WAITING_FOR_PAYMENT,
                },
            });
            const invoice = yield xendit_1.default.Invoice.createInvoice({
                data: {
                    externalId: payment.uuid,
                    amount: totalPrice,
                    payerEmail: user === null || user === void 0 ? void 0 : user.email,
                    description: `Room Reservation for ${diffDays} night(s)`,
                    invoiceDuration: "3600",
                    currency: "IDR",
                    // reminderTime: 1,
                },
            });
            payment = yield prisma_1.default.payment.update({
                where: { id: payment.id },
                data: {
                    invoiceUrl: invoice.invoiceUrl,
                    expiredAt: new Date(invoice.expiryDate),
                },
            });
        }
        else {
            payment = yield prisma_1.default.payment.create({
                data: {
                    userId,
                    totalPrice,
                    duration: diffDays,
                    paymentMethode: "MANUAL",
                    paymentProof: null,
                    status: client_1.StatusPayment.WAITING_FOR_PAYMENT,
                },
            });
            const expirationTime = (0, date_fns_1.addMinutes)(new Date(), 1);
            node_schedule_1.default.scheduleJob(Date.now() + 60 * 60 * 1000, () => __awaiter(void 0, void 0, void 0, function* () {
                yield prisma_1.default.payment.update({
                    where: {
                        id: payment.id,
                        status: client_1.StatusPayment.WAITING_FOR_PAYMENT,
                    },
                    data: {
                        status: client_1.StatusPayment.CANCELLED,
                        expiredAt: expirationTime,
                    },
                });
            }));
        }
        const reservations = [];
        for (let i = 0; i < diffDays; i++) {
            const currentStartDate = new Date(start);
            currentStartDate.setDate(currentStartDate.getDate() + i);
            const currentEndDate = new Date(currentStartDate);
            currentEndDate.setDate(currentStartDate.getDate() + 1);
            const peakRate = yield prisma_1.default.peakSeasonRate.findFirst({
                where: {
                    roomId: roomId,
                    startDate: { lte: currentStartDate },
                    endDate: { gte: currentStartDate },
                    isDeleted: false,
                },
            });
            reservations.push({
                roomId,
                price: peakRate ? peakRate.price : room.price,
                paymentId: payment.id,
                startDate: currentStartDate,
                endDate: currentEndDate,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
        yield prisma_1.default.reservation.createMany({
            data: reservations,
        });
        return { payment, reservations };
    }
    catch (error) {
        throw error;
    }
});
exports.createRoomReservationService = createRoomReservationService;
