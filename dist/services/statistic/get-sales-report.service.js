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
exports.getSalesReportService = void 0;
const get_property_metrics_service_1 = require("./get-property-metrics.service");
const get_transaction_metrics_service_1 = require("./get-transaction.metrics.service");
const getSalesReportService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ tenantId, startDate, endDate, propertyId, }) {
    try {
        const propertyMetrics = yield (0, get_property_metrics_service_1.getPropertyMetricsService)({
            tenantId,
            startDate,
            endDate,
            propertyId,
        });
        const propertyIds = propertyMetrics.map((p) => p.propertyId);
        const transactionMetrics = yield (0, get_transaction_metrics_service_1.getTransactionMetricsService)({
            propertyIds,
            startDate,
            endDate,
        });
        return {
            propertyMetrics,
            transactionMetrics,
        };
    }
    catch (error) {
        throw error;
    }
});
exports.getSalesReportService = getSalesReportService;
