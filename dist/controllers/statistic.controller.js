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
exports.getUserReportController = exports.getTransactionReportController = exports.getPropertyReportController = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const get_property_report_service_1 = require("../services/statistic/get-property-report.service");
const get_transaction_report_service_1 = require("../services/statistic/get-transaction-report.service");
const get_user_report_service_1 = require("../services/statistic/get-user-report.service");
const getPropertyReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Dapatkan tenant dari user yang login
        const user = res.locals.user;
        // Dapatkan tenant data
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id },
        });
        if (!tenant) {
            res.status(404).json({
                status: "error",
                message: "Tenant not found",
            });
            return;
        }
        const { startDate, endDate, propertyId } = req.query;
        if (!startDate || !endDate) {
            res.status(400).json({
                status: "error",
                message: "Start date and end date are required",
            });
            return;
        }
        const report = yield (0, get_property_report_service_1.getPropertyReportService)({
            tenantId: tenant.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            propertyId: propertyId ? Number(propertyId) : undefined,
        });
        res.status(200).json({
            status: "success",
            data: report,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getPropertyReportController = getPropertyReportController;
const getTransactionReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id },
        });
        if (!tenant) {
            res.status(404).json({
                status: "error",
                message: "Tenant not found",
            });
            return;
        }
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) {
            res.status(400).json({
                status: "error",
                message: "Start date and end date are required",
            });
            return;
        }
        const report = yield (0, get_transaction_report_service_1.getTransactionReportService)({
            tenantId: tenant.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
        });
        res.status(200).json({
            status: "success",
            data: report,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTransactionReportController = getTransactionReportController;
// controllers/reportController.ts
const getUserReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id },
        });
        if (!tenant) {
            res.status(404).json({
                status: "error",
                message: "Tenant not found",
            });
            return;
        }
        const { startDate, endDate, limit } = req.query;
        if (!startDate || !endDate) {
            res.status(400).json({
                status: "error",
                message: "Start date and end date are required",
            });
            return;
        }
        const report = yield (0, get_user_report_service_1.getUserReportService)({
            tenantId: tenant.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            limit: limit ? Number(limit) : undefined,
        });
        res.status(200).json({
            status: "success",
            data: report,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserReportController = getUserReportController;
