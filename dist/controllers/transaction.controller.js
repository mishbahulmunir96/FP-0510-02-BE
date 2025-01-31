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
exports.cancelTransactionByUserController = exports.getTransactionsByUserController = exports.getTransactionByUserController = exports.uploadPaymentProofController = exports.createRoomReservationController = void 0;
const create_room_reservation_service_1 = require("../services/transaction/create-room-reservation.service");
const get_transaction_by_user_service_1 = require("../services/transaction/get-transaction-by-user.service");
const upload_payment_proof_service_1 = require("../services/transaction/upload-payment-proof.service");
const get_transactions_by_user_service_1 = require("../services/transaction/get-transactions-by-user.service");
const cancel_transaction_by_user_1 = require("../services/transaction/cancel-transaction-by-user");
const createRoomReservationController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.user.id;
        const reservationData = {
            userId,
            roomId: req.body.roomId,
            startDate: new Date(req.body.startDate),
            endDate: new Date(req.body.endDate),
        };
        const result = yield (0, create_room_reservation_service_1.createRoomReservationService)(reservationData);
        res.status(201).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createRoomReservationController = createRoomReservationController;
const uploadPaymentProofController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proofFile = req.file;
        const paymentId = Number(req.params.id);
        const userId = res.locals.user.id;
        if (!proofFile) {
            res.status(400).send("Payment proof is required.");
            return;
        }
        const updatedTransaction = yield (0, upload_payment_proof_service_1.uploadPaymentProofService)({
            userId,
            paymentId,
            paymentProof: proofFile,
        });
        res.status(200).json(updatedTransaction);
    }
    catch (error) {
        next(error);
    }
});
exports.uploadPaymentProofController = uploadPaymentProofController;
const getTransactionByUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const userId = res.locals.user.id;
        const result = yield (0, get_transaction_by_user_service_1.getTransactionByUserService)(id, userId);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getTransactionByUserController = getTransactionByUserController;
const getTransactionsByUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = res.locals.user.id;
        const query = {
            take: parseInt(req.query.take) || 10,
            page: parseInt(req.query.page) || 1,
            sortBy: req.query.sortBy || "createdAt",
            sortOrder: req.query.sortOrder || "desc",
        };
        const result = yield (0, get_transactions_by_user_service_1.getTransactionsByUserService)(userId, query);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getTransactionsByUserController = getTransactionsByUserController;
const cancelTransactionByUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentId = Number(req.params.id);
        const userId = res.locals.user.id;
        const result = yield (0, cancel_transaction_by_user_1.cancelTransactionByUserService)(paymentId, userId);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.cancelTransactionByUserController = cancelTransactionByUserController;
