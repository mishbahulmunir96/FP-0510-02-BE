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
exports.uploadPaymentProofService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const cloudinary_1 = require("../../lib/cloudinary");
const uploadPaymentProofService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, paymentId, paymentProof, }) {
    try {
        const payment = yield prisma_1.default.payment.findUnique({
            where: { id: paymentId },
            include: { user: true },
        });
        if (!paymentId) {
            throw new Error("Transaction not found.");
        }
        if ((payment === null || payment === void 0 ? void 0 : payment.status) === "CANCELLED") {
            throw new Error("Transaction has been cancelled. Cannot upload proof.");
        }
        if ((payment === null || payment === void 0 ? void 0 : payment.userId) !== userId) {
            throw new Error("You are not allowed to upload proof for this transaction.");
        }
        const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(paymentProof);
        const updatedTransaction = yield prisma_1.default.payment.update({
            where: { id: paymentId },
            data: {
                paymentProof: secure_url,
                status: "WAITING_FOR_PAYMENT_CONFIRMATION",
            },
        });
        return updatedTransaction;
    }
    catch (error) {
        throw error;
    }
});
exports.uploadPaymentProofService = uploadPaymentProofService;
