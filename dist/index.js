"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const account_router_1 = __importDefault(require("./routes/account.router"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const calendar_router_1 = __importDefault(require("./routes/calendar.router"));
const category_router_1 = __importDefault(require("./routes/category.router"));
const peakSeasonRate_router_1 = __importDefault(require("./routes/peakSeasonRate.router"));
const property_router_1 = __importDefault(require("./routes/property.router"));
const review_router_1 = __importDefault(require("./routes/review.router"));
const room_router_1 = __importDefault(require("./routes/room.router"));
const roomNonAvailability_router_1 = __importDefault(require("./routes/roomNonAvailability.router"));
const sample_router_1 = __importDefault(require("./routes/sample.router"));
const statistic_router_1 = __importDefault(require("./routes/statistic.router"));
const transaction_router_1 = __importDefault(require("./routes/transaction.router"));
const xendit_router_1 = __importDefault(require("./routes/xendit.router"));
const checkInReminder_1 = require("./script/checkInReminder");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: [/http:\/\/localhost/, "https://ratehaven.my.id"],
}));
app.use(express_1.default.json());
app.use("/samples", sample_router_1.default);
app.use("/transactions", transaction_router_1.default);
app.use("/properties", property_router_1.default);
app.use("/auth", auth_router_1.default);
app.use("/account", account_router_1.default);
app.use("/xendit", xendit_router_1.default);
app.use("/reviews", review_router_1.default);
app.use("/categories", category_router_1.default);
app.use("/rooms", room_router_1.default);
app.use("/peak-season-rates", peakSeasonRate_router_1.default);
app.use("/room-non-availabilities", roomNonAvailability_router_1.default);
app.use("/statistics", statistic_router_1.default);
app.use("/calendar", calendar_router_1.default);
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
(0, checkInReminder_1.initializeCheckInReminder)();
app.listen(config_1.PORT, () => {
    console.log(`server running on PORT: ${config_1.PORT}`);
});
