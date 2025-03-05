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
exports.getPropertyCalendarReportController = exports.getSalesReportController = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const get_calendar_property_report_service_1 = require("../services/statistic/get-calendar-property-report.service");
const get_sales_report_service_1 = require("../services/statistic/get-sales-report.service");
const dateUtils_1 = require("../utils/dateUtils");
const getSalesReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const query = req.query;
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const { startDate, endDate } = (0, dateUtils_1.processDateFilters)(query);
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
        const report = yield (0, get_sales_report_service_1.getSalesReportService)({
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
exports.getSalesReportController = getSalesReportController;
const getPropertyCalendarReportController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const propertyId = Number(req.query.propertyId);
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        const roomId = req.query.roomId
            ? Number(req.query.roomId)
            : undefined;
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
        if (roomId) {
            const roomBelongsToProperty = yield prisma_1.default.room.findFirst({
                where: {
                    id: roomId,
                    propertyId: propertyId,
                    isDeleted: false,
                },
            });
            if (!roomBelongsToProperty) {
                throw new Error("Room not found in the specified property");
            }
        }
        const report = yield (0, get_calendar_property_report_service_1.getPropertyCalendarReportService)({
            propertyId,
            tenantId: tenant.id,
            startDate: parsedStartDate,
            endDate: parsedEndDate,
            roomId,
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
