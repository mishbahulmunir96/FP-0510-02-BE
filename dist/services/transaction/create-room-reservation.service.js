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
const checkPeakRate_1 = require("../../lib/checkPeakRate");
const config_1 = require("../../config");
const createRoomReservationService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, roomId, startDate, endDate, paymentMethode } = body;
        const checkinDate = new Date(startDate);
        checkinDate.setUTCHours(7, 0, 0, 0);
        const checkoutDate = new Date(endDate);
        checkoutDate.setUTCHours(5, 0, 0, 0);
        const isAvailable = yield (0, checkRoomAvailability_1.checkRoomAvailability)(roomId, checkinDate, checkoutDate);
        if (!isAvailable) {
            throw new Error("Room not available on selected date.");
        }
        const diffTime = checkoutDate.getTime() - checkinDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            throw new Error("Minimum reservation is 1 night.");
        }
        const room = yield prisma_1.default.room.findUnique({
            where: {
                id: roomId,
                isDeleted: false,
            },
            select: {
                price: true,
                stock: true,
            },
        });
        if (!room || room.price === undefined) {
            throw new Error("Room not found.");
        }
        let totalPrice = 0;
        const startForPrice = new Date(checkinDate);
        for (let i = 0; i < diffDays; i++) {
            const currentDate = new Date(startForPrice);
            currentDate.setUTCDate(startForPrice.getUTCDate() + i);
            currentDate.setUTCHours(0, 0, 0, 0);
            const peakRate = yield (0, checkPeakRate_1.checkPeakRate)(currentDate, roomId);
            totalPrice += peakRate ? peakRate.price : room.price;
        }
        let payment;
        if (paymentMethode === "OTOMATIS") {
            const user = yield prisma_1.default.user.findUnique({
                where: {
                    id: userId,
                    isDeleted: false,
                },
                select: { email: true },
            });
            if (!(user === null || user === void 0 ? void 0 : user.email)) {
                throw new Error("User not found.");
            }
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
                    payerEmail: user.email,
                    description: `Room eservation for ${diffDays} night(s)`,
                    invoiceDuration: "3600",
                    currency: "IDR",
                    shouldSendEmail: true,
                    reminderTime: 1,
                    successRedirectUrl: `http://${config_1.BASE_URL_FE}/transactions/${payment.id}`,
                    failureRedirectUrl: `http://${config_1.BASE_URL_FE}/transactions/${payment.id}`,
                    customerNotificationPreference: {
                        invoiceCreated: ["email"],
                        invoiceReminder: ["email"],
                        invoicePaid: ["email"],
                    },
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
            const expirationTime = (0, date_fns_1.addMinutes)(new Date(), 60);
            node_schedule_1.default.scheduleJob(expirationTime, () => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield prisma_1.default.payment.updateMany({
                        where: {
                            id: payment.id,
                            status: client_1.StatusPayment.WAITING_FOR_PAYMENT,
                        },
                        data: {
                            status: client_1.StatusPayment.CANCELLED,
                            expiredAt: expirationTime,
                        },
                    });
                }
                catch (error) {
                    console.error("Error cancelling payment:", error);
                }
            }));
        }
        const reservations = [];
        for (let i = 0; i < diffDays; i++) {
            const currentStartDate = new Date(checkinDate);
            currentStartDate.setUTCDate(checkinDate.getUTCDate() + i);
            currentStartDate.setUTCHours(7, 0, 0, 0);
            const currentEndDate = new Date(currentStartDate);
            currentEndDate.setUTCDate(currentStartDate.getUTCDate() + 1);
            currentEndDate.setUTCHours(5, 0, 0, 0);
            const peakRate = yield (0, checkPeakRate_1.checkPeakRate)(currentStartDate, roomId);
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
        return {
            payment,
            reservations,
            message: "Reservation Succesfully created.",
        };
    }
    catch (error) {
        throw error;
    }
});
exports.createRoomReservationService = createRoomReservationService;
