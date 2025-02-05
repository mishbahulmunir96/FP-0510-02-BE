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
exports.getReviewsByPropertyService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getReviewsByPropertyService = (propertyId, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, take, sortBy, sortOrder } = query;
        const reviews = yield prisma_1.default.review.findMany({
            where: {
                propertyId,
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
            skip: (page - 1) * take,
            take,
            orderBy: { [sortBy]: sortOrder },
        });
        const count = yield prisma_1.default.review.count({
            where: {
                propertyId,
            },
        });
        const averageRating = yield prisma_1.default.review.aggregate({
            where: {
                propertyId,
            },
            _avg: {
                rating: true,
            },
        });
        return {
            data: reviews.map((review) => {
                var _a;
                return ({
                    id: review.id,
                    rating: review.rating,
                    review: review.review,
                    createdAt: review.createdAt,
                    updatedAt: review.updatedAt,
                    user: {
                        id: review.user.id,
                        name: review.user.name,
                        email: review.user.email,
                        imageUrl: review.user.imageUrl,
                    },
                    room: ((_a = review.payment.reservation[0]) === null || _a === void 0 ? void 0 : _a.room)
                        ? {
                            type: review.payment.reservation[0].room.type,
                            price: review.payment.reservation[0].room.price,
                            images: review.payment.reservation[0].room.roomImage,
                            facilities: review.payment.reservation[0].room.roomFacility,
                        }
                        : null,
                });
            }),
            meta: {
                page,
                take,
                total: count,
                averageRating: averageRating._avg.rating || 0,
            },
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getReviewsByPropertyService = getReviewsByPropertyService;
