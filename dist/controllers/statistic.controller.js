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
exports.getPropertyCalendarReportController = exports.getUserReportController = exports.getTransactionReportController = exports.getPropertyReportController = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const get_property_report_service_1 = require("../services/statistic/get-property-report.service");
const get_transaction_report_service_1 = require("../services/statistic/get-transaction-report.service");
const get_user_report_service_1 = require("../services/statistic/get-user-report.service");
const date_utils_1 = require("../utils/date.utils");
const get_calendar_property_report_service_1 = require("../services/statistic/get-calendar-property-report.service");
const processDateFilters = (query) => {
    const filterType = query.filterType || "date-range";
    const month = query.month ? parseInt(query.month) : undefined;
    const year = query.year ? parseInt(query.year) : undefined;
    const { startDate, endDate } = (0, date_utils_1.getDateRangeFromFilter)(filterType, {
        startDate: query.startDate,
        endDate: query.endDate,
        month,
        year,
    });
    (0, date_utils_1.validateDateRange)(startDate, endDate);
    return { startDate, endDate };
};
const getPropertyReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const query = req.query;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const { startDate, endDate } = processDateFilters(query);
        const propertyId = query.propertyId ? Number(query.propertyId) : undefined;
        if (propertyId) {
            const propertyExists = yield prisma_1.default.property.findFirst({
                where: {
                    id: propertyId,
                    tenantId: tenant.id,
                    isDeleted: false,
                },
            });
            if (!propertyExists) {
                throw new Error("Property not found or unauthorized");
            }
        }
        const report = yield (0, get_property_report_service_1.getPropertyReportService)({
            tenantId: tenant.id,
            startDate,
            endDate,
            propertyId,
        });
        res.status(200).json({
            status: "success",
            data: report,
            metadata: {
                filterType: query.filterType || "date-range",
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                propertyId,
            },
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
        const query = req.query;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const { startDate, endDate } = processDateFilters(query);
        const propertyId = query.propertyId ? Number(query.propertyId) : undefined;
        if (propertyId) {
            const propertyExists = yield prisma_1.default.property.findFirst({
                where: {
                    id: propertyId,
                    tenantId: tenant.id,
                    isDeleted: false,
                },
            });
            if (!propertyExists) {
                throw new Error("Property not found or unauthorized");
            }
        }
        const report = yield (0, get_transaction_report_service_1.getTransactionReportService)({
            tenantId: tenant.id,
            startDate,
            endDate,
            propertyId,
        });
        res.status(200).json({
            status: "success",
            data: report,
            metadata: {
                filterType: query.filterType || "date-range",
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                propertyId,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getTransactionReportController = getTransactionReportController;
const getUserReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const query = req.query;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const { startDate, endDate } = processDateFilters(query);
        const limit = query.limit ? Number(query.limit) : undefined;
        const report = yield (0, get_user_report_service_1.getUserReportService)({
            tenantId: tenant.id,
            startDate,
            endDate,
            limit,
        });
        res.status(200).json({
            status: "success",
            data: report,
            metadata: {
                filterType: query.filterType || "date-range",
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                limit,
            },
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getUserReportController = getUserReportController;
const getPropertyCalendarReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const propertyId = Number(req.query.propertyId);
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        const roomType = req.query.roomType;
        if (!propertyId || !startDate || !endDate) {
            throw new Error("Property ID, start date, and end date are required");
        }
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);
        if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
            throw new Error("Invalid date format");
        }
        if (parsedEndDate < parsedStartDate) {
            throw new Error("End date must be greater than start date");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                isDeleted: false,
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const report = yield (0, get_calendar_property_report_service_1.getPropertyCalendarReportService)({
            propertyId,
            tenantId: tenant.id,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            roomType,
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
exports.getPropertyCalendarReportController = getPropertyCalendarReportController;
