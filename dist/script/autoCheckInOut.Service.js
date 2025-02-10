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
exports.initializeAutoCheckInOut = void 0;
const node_schedule_1 = __importDefault(require("node-schedule"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const client_1 = require("../../prisma/generated/client");
const initializeAutoCheckInOut = () => {
    node_schedule_1.default.scheduleJob("0 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield autoCheckIn();
            yield autoCheckOut();
        }
        catch (error) {
            console.error("Auto check-in/out error:", error);
        }
    }));
};
exports.initializeAutoCheckInOut = initializeAutoCheckInOut;
const autoCheckIn = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    if (currentDate.getHours() < 14) {
        return;
    }
    try {
        const result = yield prisma_1.default.payment.updateMany({
            where: {
                status: client_1.StatusPayment.PROCESSED,
                reservation: {
                    some: {
                        startDate: {
                            lte: currentDate,
                            gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 14, 0, 0),
                        },
                    },
                },
            },
            data: {
                status: client_1.StatusPayment.CHECKED_IN,
            },
        });
        if (result.count > 0) {
            console.log(`${result.count} reservations automatically checked in`);
        }
    }
    catch (error) {
        console.error("Error in autoCheckIn:", error);
    }
});
const autoCheckOut = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    if (currentDate.getHours() < 12) {
        return;
    }
    try {
        const checkoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 12, 0, 0);
        const result = yield prisma_1.default.payment.updateMany({
            where: {
                status: client_1.StatusPayment.CHECKED_IN,
                reservation: {
                    some: {
                        endDate: {
                            lte: currentDate,
                            gte: checkoutTime,
                        },
                    },
                },
            },
            data: {
                status: client_1.StatusPayment.CHECKED_OUT,
            },
        });
        if (result.count > 0) {
            console.log(`${result.count} reservations automatically checked out at ${currentDate}`);
        }
    }
    catch (error) {
        console.error("Error in autoCheckOut:", error);
    }
});
