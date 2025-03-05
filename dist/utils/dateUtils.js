"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupDataByPeriod = exports.processDateFilters = exports.getDateRangeFromFilter = exports.validateDateRange = exports.getDefaultDateRange = exports.normalizeToUTC = void 0;
const date_fns_1 = require("date-fns");
const normalizeToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0));
};
exports.normalizeToUTC = normalizeToUTC;
const getDefaultDateRange = () => {
    const endDate = (0, exports.normalizeToUTC)(new Date());
    const startDate = new Date(endDate);
    startDate.setFullYear(startDate.getFullYear() - 1);
    return { startDate, endDate };
};
exports.getDefaultDateRange = getDefaultDateRange;
const validateDateRange = (startDate, endDate) => {
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid date format");
    }
    if (endDate < startDate) {
        throw new Error("End date must be greater than start date");
    }
    const maxRange = 366;
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff > maxRange) {
        throw new Error(`Date range cannot exceed ${maxRange} days`);
    }
};
exports.validateDateRange = validateDateRange;
const getDateRangeFromFilter = (filterType, params) => {
    const { startDate, endDate, month, year } = params;
    switch (filterType) {
        case "month-year": {
            if (!month || !year)
                throw new Error("Month and year are required for month-year filter");
            const start = new Date(Date.UTC(year, month - 1, 1));
            const end = new Date(Date.UTC(year, month, 0));
            return { startDate: start, endDate: end };
        }
        case "year-only": {
            if (!year)
                throw new Error("Year is required for year-only filter");
            const start = new Date(Date.UTC(year, 0, 1));
            const end = new Date(Date.UTC(year, 11, 31));
            return { startDate: start, endDate: end };
        }
        case "date-range": {
            if (!startDate || !endDate) {
                return (0, exports.getDefaultDateRange)();
            }
            return {
                startDate: (0, exports.normalizeToUTC)(new Date(startDate)),
                endDate: (0, exports.normalizeToUTC)(new Date(endDate)),
            };
        }
        default:
            return (0, exports.getDefaultDateRange)();
    }
};
exports.getDateRangeFromFilter = getDateRangeFromFilter;
const processDateFilters = (query) => {
    const filterType = query.filterType || "date-range";
    const month = query.month ? parseInt(query.month) : undefined;
    const year = query.year ? parseInt(query.year) : undefined;
    const { startDate, endDate } = (0, exports.getDateRangeFromFilter)(filterType, {
        startDate: query.startDate,
        endDate: query.endDate,
        month,
        year,
    });
    (0, exports.validateDateRange)(startDate, endDate);
    return { startDate, endDate };
};
exports.processDateFilters = processDateFilters;
const groupDataByPeriod = (payments, startDate, endDate) => {
    const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    let groupingFunction;
    if (diffInDays <= 7) {
        groupingFunction = (date) => (0, date_fns_1.format)((0, exports.normalizeToUTC)(date), "yyyy-MM-dd");
    }
    else if (diffInDays <= 31) {
        groupingFunction = (date) => {
            const weekNumber = Math.ceil(date.getDate() / 7);
            return `${(0, date_fns_1.format)((0, exports.normalizeToUTC)(date), "yyyy-MM")}-W${weekNumber}`;
        };
    }
    else {
        groupingFunction = (date) => (0, date_fns_1.format)((0, exports.normalizeToUTC)(date), "yyyy-MM");
    }
    const groupedData = payments.reduce((acc, payment) => {
        const date = new Date(payment.createdAt);
        const key = groupingFunction(date);
        if (!acc[key]) {
            acc[key] = {
                date: key,
                totalBookings: 0,
                totalRevenue: 0,
            };
        }
        acc[key].totalBookings += 1;
        acc[key].totalRevenue += payment.totalPrice;
        return acc;
    }, {});
    return Object.values(groupedData).sort((a, b) => a.date.localeCompare(b.date));
};
exports.groupDataByPeriod = groupDataByPeriod;
