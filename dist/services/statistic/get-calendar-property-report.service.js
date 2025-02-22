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
exports.getPropertyCalendarReportService = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getPropertyCalendarReportService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { propertyId, tenantId, startDate, endDate, roomType } = query;
        // Verify property belongs to tenant
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id: propertyId,
                tenantId,
                isDeleted: false,
            },
            select: {
                id: true,
                title: true,
                room: {
                    where: Object.assign({ isDeleted: false }, (roomType && { type: roomType })),
                    select: {
                        id: true,
                        name: true,
                        type: true,
                        stock: true,
                        price: true,
                    },
                },
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        // Get all dates in range
        const dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        // Get all reservations in date range
        const reservations = yield prisma_1.default.reservation.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomType && { type: roomType })),
                startDate: { lte: endDate },
                endDate: { gte: startDate },
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
            select: {
                startDate: true,
                endDate: true,
                roomId: true,
            },
        });
        // Get non-availability periods
        const nonAvailabilityPeriods = yield prisma_1.default.roomNonAvailability.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomType && { type: roomType })),
                isDeleted: false,
                startDate: { lte: endDate },
                endDate: { gte: startDate },
            },
            select: {
                startDate: true,
                endDate: true,
                roomId: true,
            },
        });
        // Get peak season rates
        const peakSeasonRates = yield prisma_1.default.peakSeasonRate.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomType && { type: roomType })),
                isDeleted: false,
                startDate: { lte: endDate },
                endDate: { gte: startDate },
            },
            select: {
                startDate: true,
                endDate: true,
                roomId: true,
                price: true,
            },
        });
        // Process calendar data
        const calendarData = dates.map((date) => {
            const roomsStatus = property.room.map((room) => {
                // Check bookings for this date and room
                const bookedRooms = reservations.filter((reservation) => reservation.roomId === room.id &&
                    date >= reservation.startDate &&
                    date <= reservation.endDate).length;
                // Check if room is non-available
                const isNonAvailable = nonAvailabilityPeriods.some((period) => period.roomId === room.id &&
                    date >= period.startDate &&
                    date <= period.endDate);
                // Check if peak season
                const peakRate = peakSeasonRates.find((rate) => rate.roomId === room.id &&
                    date >= rate.startDate &&
                    date <= rate.endDate);
                const availableRooms = isNonAvailable ? 0 : room.stock - bookedRooms;
                const occupancyRate = ((bookedRooms / room.stock) * 100).toFixed(1);
                return {
                    roomId: room.id,
                    roomName: room.name || `${room.type} Room`,
                    roomType: room.type,
                    totalRooms: room.stock,
                    bookedRooms,
                    availableRooms,
                    occupancyRate: parseFloat(occupancyRate),
                    isNonAvailable,
                    isPeakSeason: !!peakRate,
                    price: (peakRate === null || peakRate === void 0 ? void 0 : peakRate.price) || room.price,
                };
            });
            return {
                date: date.toISOString().split("T")[0],
                rooms: roomsStatus,
            };
        });
        return {
            propertyId: property.id,
            propertyName: property.title,
            calendarData,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getPropertyCalendarReportService = getPropertyCalendarReportService;
