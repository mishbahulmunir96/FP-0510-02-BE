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
exports.createReviewService = void 0;
const client_1 = require("../../../prisma/generated/client");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createReviewService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { userId, paymentId, rating, review } = body;
        const payment = yield prisma_1.default.payment.findUnique({
            where: {
                id: paymentId,
                userId,
                status: client_1.StatusPayment.CHECKED_OUT,
            },
            include: {
                reservation: {
                    include: {
                        room: {
                            include: {
                                property: true,
                            },
                        },
                    },
                },
            },
        });
        if (!payment) {
            throw new Error("Transaction not found or not eligible for review");
        }
        const existingReview = yield prisma_1.default.review.findFirst({
            where: {
                paymentId,
                userId,
            },
        });
        if (existingReview) {
            throw new Error("Review already exists for this payment");
        }
        const propertyId = (_a = payment.reservation[0]) === null || _a === void 0 ? void 0 : _a.room.property.id;
        if (!propertyId) {
            throw new Error("Property not found");
        }
        const newReview = yield prisma_1.default.review.create({
            data: {
                rating,
                review,
                userId,
                paymentId,
                propertyId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        imageUrl: true,
                    },
                },
                property: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        });
        return newReview;
    }
    catch (error) {
        throw error;
    }
});
exports.createReviewService = createReviewService;
