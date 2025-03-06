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
exports.createRoomNonAvailabilityService = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createRoomNonAvailabilityService = (userId, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reason, startDate, endDate, roomId } = body;
        const user = yield prisma_1.default.user.findFirst({
            where: { id: userId },
        });
        if (!user) {
            throw new Error("User not found");
        }
        const existingNonAvailabilities = yield prisma_1.default.roomNonAvailability.findMany({
            where: { roomId },
        });
        const inputInterval = {
            start: new Date(startDate),
            end: new Date(endDate),
        };
        existingNonAvailabilities.forEach((item) => {
            const overlap = (0, date_fns_1.areIntervalsOverlapping)(inputInterval, {
                start: new Date(item.startDate),
                end: new Date(item.endDate),
            });
            if (overlap) {
                throw new Error("Room Non Availability for that interval already exists");
            }
        });
        const room = yield prisma_1.default.room.findFirst({
            where: { id: roomId },
        });
        if (!room) {
            throw new Error("Room not found");
        }
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const newRoomNonAvailability = yield tx.roomNonAvailability.create({
                data: {
                    reason,
                    roomId,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                },
            });
            return {
                message: "Create Room Non Availability success",
                data: newRoomNonAvailability,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.createRoomNonAvailabilityService = createRoomNonAvailabilityService;
