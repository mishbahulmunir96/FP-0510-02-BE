"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateRangeFromFilter = exports.validateDateRange = exports.getDefaultDateRange = exports.normalizeToUTC = void 0;
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
    const maxRange = 365;
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
