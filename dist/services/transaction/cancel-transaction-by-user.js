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
exports.cancelTransactionByUserService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const cancelTransactionByUserService = (paymentId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma_1.default.payment.findUnique({
            where: { id: paymentId },
        });
        if (!payment) {
            throw new Error("Transaction not found.");
        }
        if (payment.status === "CANCELLED") {
            throw new Error("Transaction has already been cancelled.");
        }
        if (payment.status !== "WAITING_FOR_PAYMENT") {
            throw new Error("Cannot cancel a transaction that has already been paid.");
        }
        if (payment.userId !== userId) {
            throw new Error("You are not allowed to cancel this transaction.");
        }
        const cancelledTransaction = yield prisma_1.default.payment.update({
            where: { id: paymentId },
            data: {
                status: "CANCELLED",
            },
        });
        return cancelledTransaction;
    }
    catch (error) {
        throw error;
    }
});
exports.cancelTransactionByUserService = cancelTransactionByUserService;
