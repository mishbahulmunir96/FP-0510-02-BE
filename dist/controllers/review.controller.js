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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsByRoomController = exports.getReviewByTenantController = exports.replyReviewController = exports.getReviewByTransactionController = exports.getReviewsByPropertyController = exports.createReviewController = void 0;
const create_review_service_1 = require("../services/review/create-review.service");
const get_review_by_transaction_service_1 = require("../services/review/get-review-by-transaction.service");
const get_reviews_by_property_service_1 = require("../services/review/get-reviews-by-property.service");
const create_review_reply_service_1 = require("../services/review/create-review-reply.service");
const get_review_by_tenant_service_1 = require("../services/review/get-review-by-tenant.service");
const get_review_by_room_service_1 = require("../services/review/get-review-by-room.service");
const createReviewController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.user.id;
        const reviewData = {
            userId,
            paymentId: req.body.paymentId,
            rating: req.body.rating,
            review: req.body.review,
        };
        const result = yield (0, create_review_service_1.createReviewService)(reviewData);
        res.status(201).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createReviewController = createReviewController;
const getReviewsByPropertyController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyId = parseInt(req.params.propertyId);
        const page = parseInt(req.query.page) || 1;
        const take = parseInt(req.query.take) || 10;
        const sortBy = req.query.sortBy || "createdAt";
        const sortOrder = req.query.sortOrder || "desc";
        if (isNaN(propertyId)) {
            throw new Error("Invalid property ID");
        }
        const result = yield (0, get_reviews_by_property_service_1.getReviewsByPropertyService)(propertyId, {
            page,
            take,
            sortBy,
            sortOrder,
        });
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getReviewsByPropertyController = getReviewsByPropertyController;
const getReviewByTransactionController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.user.id;
        const paymentId = parseInt(req.params.paymentId);
        if (isNaN(paymentId)) {
            throw new Error("Invalid payment ID");
        }
        const result = yield (0, get_review_by_transaction_service_1.getReviewByTransactionService)(paymentId, userId);
        if (!result) {
            throw new Error("Review not found");
        }
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getReviewByTransactionController = getReviewByTransactionController;
const replyReviewController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.user.id;
        const { reviewId } = req.params;
        const replyData = {
            userId,
            reviewId: parseInt(reviewId),
            replyMessage: req.body.replyMessage,
        };
        const result = yield (0, create_review_reply_service_1.replyReviewService)(replyData);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.replyReviewController = replyReviewController;
const getReviewByTenantController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentId = parseInt(req.params.paymentId);
        const result = yield (0, get_review_by_tenant_service_1.getReviewByTenantService)(paymentId);
        if (!result) {
            throw new Error("Review not found");
        }
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getReviewByTenantController = getReviewByTenantController;
const getReviewsByRoomController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomId = parseInt(req.params.roomId);
        const page = parseInt(req.query.page) || 1;
        const take = parseInt(req.query.take) || 10;
        const sortBy = req.query.sortBy || "createdAt";
        const sortOrder = req.query.sortOrder || "desc";
        if (isNaN(roomId)) {
            throw new Error("Invalid room ID");
        }
        const result = yield (0, get_review_by_room_service_1.getReviewsByRoomService)(roomId, {
            page,
            take,
            sortBy,
            sortOrder,
        });
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getReviewsByRoomController = getReviewsByRoomController;
