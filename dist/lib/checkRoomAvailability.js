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
exports.checkRoomAvailability = void 0;
const client_1 = require("../../prisma/generated/client");
const prisma_1 = __importDefault(require("./prisma"));
const checkRoomAvailability = (roomId, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const activeReservations = yield prisma_1.default.reservation.findMany({
        where: {
            roomId,
            AND: [
                {
                    startDate: { lt: endDate },
                    endDate: { gt: startDate },
                },
            ],
            payment: {
                status: {
                    in: [
                        client_1.StatusPayment.WAITING_FOR_PAYMENT,
                        client_1.StatusPayment.WAITING_FOR_PAYMENT_CONFIRMATION,
                        client_1.StatusPayment.PROCESSED,
                        client_1.StatusPayment.CHECKED_IN,
                    ],
                },
            },
        },
    });
    const nonAvailabilityPeriods = yield prisma_1.default.roomNonAvailability.findMany({
        where: {
            roomId,
            isDeleted: false,
            OR: [
                {
                    startDate: { lt: endDate },
                    endDate: { gt: startDate },
                },
            ],
        },
    });
    const room = yield prisma_1.default.room.findUnique({
        where: { id: roomId },
        select: { stock: true },
    });
    if (!room) {
        throw new Error("Room not found");
    }
    const availableStock = room.stock;
    const bookedRooms = activeReservations.length;
    const isRoomAvailable = nonAvailabilityPeriods.length === 0 && bookedRooms < availableStock;
    return isRoomAvailable;
});
exports.checkRoomAvailability = checkRoomAvailability;
