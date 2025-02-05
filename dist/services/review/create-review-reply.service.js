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
exports.replyReviewService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const replyReviewService = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, reviewId, replyMessage } = body;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId,
                isDeleted: false,
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const review = yield prisma_1.default.review.findUnique({
            where: {
                id: reviewId,
            },
            include: {
                property: {
                    include: {
                        tenant: true,
                    },
                },
            },
        });
        if (!review) {
            throw new Error("Review not found");
        }
        if (review.property.tenant.id !== tenant.id) {
            throw new Error("Unauthorized: You can only reply to reviews on your properties");
        }
        if (review.replyMessage) {
            throw new Error("Review has already been replied to");
        }
        const updatedReview = yield prisma_1.default.review.update({
            where: {
                id: reviewId,
            },
            data: {
                replyMessage,
                replyDate: new Date(),
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
        return updatedReview;
    }
    catch (error) {
        throw error;
    }
});
exports.replyReviewService = replyReviewService;
