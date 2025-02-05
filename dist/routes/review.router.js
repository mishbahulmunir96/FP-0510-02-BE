"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("../controllers/review.controller");
const jwt_1 = require("../lib/jwt");
const isTenant_1 = require("../lib/isTenant");
const review_validators_1 = require("../validators/review.validators");
const router = express_1.default.Router();
router.post("/", jwt_1.verifyToken, review_validators_1.validateCreateReview, review_controller_1.createReviewController);
router.post("/reply/:reviewId", jwt_1.verifyToken, isTenant_1.isTenant, review_validators_1.validateReplyReview, review_controller_1.replyReviewController);
router.get("/property/:propertyId", review_controller_1.getReviewsByPropertyController);
router.get("/transactions/:paymentId", jwt_1.verifyToken, review_controller_1.getReviewByTransactionController);
router.get("/tenant/transactions/:paymentId", jwt_1.verifyToken, review_controller_1.getReviewByTenantController);
exports.default = router;
