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
exports.getReviewByTransactionService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getReviewByTransactionService = (paymentId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const review = yield prisma_1.default.review.findFirst({
            where: {
                paymentId,
                userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        imageUrl: true,
                    },
                },
                payment: {
                    select: {
                        reservation: {
                            include: {
                                room: {
                                    select: {
                                        type: true,
                                        price: true,
                                        property: {
                                            select: {
                                                title: true,
                                                location: true,
                                            },
                                        },
                                        roomImage: {
                                            select: {
                                                imageUrl: true,
                                            },
                                        },
                                        roomFacility: {
                                            select: {
                                                title: true,
                                                description: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!review) {
            return null;
        }
        return {
            id: review.id,
            rating: review.rating,
            review: review.review,
            replyMessage: review.replyMessage,
            replyDate: review.replyDate,
            createdAt: review.createdAt,
            updatedAt: review.updatedAt,
            user: {
                id: review.user.id,
                name: review.user.name,
                email: review.user.email,
                imageUrl: review.user.imageUrl,
            },
            property: ((_a = review.payment.reservation[0]) === null || _a === void 0 ? void 0 : _a.room.property)
                ? {
                    title: review.payment.reservation[0].room.property.title,
                    location: review.payment.reservation[0].room.property.location,
                }
                : null,
            room: ((_b = review.payment.reservation[0]) === null || _b === void 0 ? void 0 : _b.room)
                ? {
                    type: review.payment.reservation[0].room.type,
                    price: review.payment.reservation[0].room.price,
                    images: review.payment.reservation[0].room.roomImage,
                    facilities: review.payment.reservation[0].room.roomFacility,
                }
                : null,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getReviewByTransactionService = getReviewByTransactionService;
