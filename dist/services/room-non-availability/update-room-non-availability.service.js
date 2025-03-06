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
exports.updateRoomNonAvailabilityService = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updateRoomNonAvailabilityService = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingRecord = yield prisma_1.default.roomNonAvailability.findUnique({
            where: { id },
        });
        if (!existingRecord) {
            throw new Error("Room Non Availability not found");
        }
        if (body.startDate && body.endDate && body.roomId) {
            const newInterval = {
                start: new Date(body.startDate),
                end: new Date(body.endDate),
            };
            const otherIntervals = yield prisma_1.default.roomNonAvailability.findMany({
                where: {
                    roomId: body.roomId,
                    NOT: { id },
                    isDeleted: false,
                },
            });
            for (const interval of otherIntervals) {
                const overlap = (0, date_fns_1.areIntervalsOverlapping)(newInterval, {
                    start: new Date(interval.startDate),
                    end: new Date(interval.endDate),
                });
                if (overlap) {
                    throw new Error("The new non-availability interval overlaps with an existing one");
                }
            }
        }
        const updatedRecord = yield prisma_1.default.roomNonAvailability.update({
            where: { id },
            data: Object.assign({}, body),
        });
        return {
            message: "Update Room Non Availability Success",
            data: updatedRecord,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.updateRoomNonAvailabilityService = updateRoomNonAvailabilityService;
