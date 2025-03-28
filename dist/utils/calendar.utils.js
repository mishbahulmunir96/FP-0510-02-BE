"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCalendarData = generateCalendarData;
exports.getDailyPrices = getDailyPrices;
exports.calculateAveragePrice = calculateAveragePrice;
function generateCalendarData(startDate, endDate, basePrice, baseStock, peakSeasonRates, nonAvailabilities, reservations) {
    const calendar = {};
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split("T")[0];
        const peakRate = peakSeasonRates.find((peak) => new Date(peak.startDate) <= currentDate &&
            new Date(peak.endDate) >= currentDate);
        const isUnavailableDate = nonAvailabilities.some((period) => new Date(period.startDate) <= currentDate &&
            new Date(period.endDate) >= currentDate);
        const reservationCount = reservations.filter((reservation) => new Date(reservation.startDate) <= currentDate &&
            new Date(reservation.endDate) > currentDate).length;
        const availableStock = Math.max(0, baseStock - reservationCount);
        calendar[dateKey] = {
            date: new Date(currentDate),
            price: peakRate ? peakRate.price : basePrice,
            isPeakSeason: !!peakRate,
            isAvailable: !isUnavailableDate && availableStock > 0,
            availableStock,
            totalStock: baseStock,
        };
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return calendar;
}
function getDailyPrices(startDate, endDate, basePrice, peakSeasonRates) {
    const dailyPrices = {};
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const dateKey = currentDate.toISOString().split("T")[0];
        const peakRate = peakSeasonRates.find((peak) => new Date(peak.startDate) <= currentDate &&
            new Date(peak.endDate) >= currentDate);
        dailyPrices[dateKey] = peakRate ? peakRate.price : basePrice;
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dailyPrices;
}
function calculateAveragePrice(dailyPrices) {
    const prices = Object.values(dailyPrices);
    if (prices.length === 0)
        return 0;
    const sum = prices.reduce((total, price) => total + price, 0);
    return Math.round(sum / prices.length);
}
