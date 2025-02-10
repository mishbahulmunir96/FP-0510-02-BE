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
exports.xenditCallbackService = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const xenditCallbackService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma_1.default.payment.findFirst({
            where: {
                uuid: body.external_id,
                paymentMethode: "OTOMATIS",
            },
        });
        if (!payment) {
            throw new Error("Payment not found or payment method is not OTOMATIS");
        }
        let status;
        switch (body.status) {
            case "PAID":
                status = client_1.StatusPayment.PROCESSED;
                break;
            case "EXPIRED":
                status = client_1.StatusPayment.CANCELLED;
                break;
            case "PENDING":
                status = client_1.StatusPayment.WAITING_FOR_PAYMENT;
                break;
            default:
                status = client_1.StatusPayment.WAITING_FOR_PAYMENT;
        }
        const updatedPayment = yield prisma_1.default.payment.update({
            where: { id: payment.id },
            data: {
                status,
                paymentProof: body.payment_method
                    ? `Xendit Payment - Method: ${body.payment_method}, Channel: ${body.payment_channel}`
                    : null,
                updatedAt: new Date(),
            },
        });
        return {
            message: "Payment status updated successfully",
            payment: updatedPayment,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.xenditCallbackService = xenditCallbackService;
