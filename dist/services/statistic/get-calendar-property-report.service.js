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
        const { propertyId, tenantId, startDate, endDate, roomId } = query;
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
                    where: Object.assign({ isDeleted: false }, (roomId && { id: roomId })),
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
        const dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        const reservations = yield prisma_1.default.reservation.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomId && { id: roomId })),
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
        const nonAvailabilityPeriods = yield prisma_1.default.roomNonAvailability.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomId && { id: roomId })),
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
        const peakSeasonRates = yield prisma_1.default.peakSeasonRate.findMany({
            where: {
                room: Object.assign({ propertyId, isDeleted: false }, (roomId && { id: roomId })),
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
        const calendarData = dates.map((date) => {
            const roomsStatus = property.room.map((room) => {
                const bookedRooms = reservations.filter((reservation) => reservation.roomId === room.id &&
                    date >= reservation.startDate &&
                    date <= reservation.endDate).length;
                const isNonAvailable = nonAvailabilityPeriods.some((period) => period.roomId === room.id &&
                    date >= period.startDate &&
                    date <= period.endDate);
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
            const totalRooms = roomsStatus.reduce((sum, room) => sum + room.totalRooms, 0);
            const totalBookedRooms = roomsStatus.reduce((sum, room) => sum + room.bookedRooms, 0);
            const totalAvailableRooms = roomsStatus.reduce((sum, room) => sum + room.availableRooms, 0);
            const occupancyRate = totalRooms > 0
                ? parseFloat(((totalBookedRooms / totalRooms) * 100).toFixed(1))
                : 0;
            return {
                date: date.toISOString().split("T")[0],
                totalRooms,
                totalBookedRooms,
                totalAvailableRooms,
                occupancyRate,
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
