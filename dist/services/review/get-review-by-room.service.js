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
exports.getReviewsByRoomService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getReviewsByRoomService = (roomId, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, take, sortBy, sortOrder } = query;
        const reviews = yield prisma_1.default.review.findMany({
            where: {
                payment: {
                    reservation: {
                        some: {
                            roomId: roomId,
                        },
                    },
                },
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
                            where: {
                                roomId: roomId,
                            },
                            select: {
                                startDate: true,
                                endDate: true,
                                price: true,
                                room: {
                                    select: {
                                        type: true,
                                        guest: true,
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
                payment: {
                    reservation: {
                        some: {
                            roomId: roomId,
                        },
                    },
                },
            },
        });
        const averageRating = yield prisma_1.default.review.aggregate({
            where: {
                payment: {
                    reservation: {
                        some: {
                            roomId: roomId,
                        },
                    },
                },
            },
            _avg: {
                rating: true,
            },
        });
        return {
            data: reviews.map((review) => ({
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
                reservation: review.payment.reservation[0]
                    ? {
                        startDate: review.payment.reservation[0].startDate,
                        endDate: review.payment.reservation[0].endDate,
                        price: review.payment.reservation[0].price,
                        room: {
                            type: review.payment.reservation[0].room.type,
                            guest: review.payment.reservation[0].room.guest,
                            images: review.payment.reservation[0].room.roomImage,
                            facilities: review.payment.reservation[0].room.roomFacility,
                        },
                    }
                    : null,
            })),
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
exports.getReviewsByRoomService = getReviewsByRoomService;
