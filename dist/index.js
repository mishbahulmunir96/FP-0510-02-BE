"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const cors_1 = __importDefault(require("cors"));
const sample_router_1 = __importDefault(require("./routes/sample.router"));
const transaction_router_1 = __importDefault(require("./routes/transaction.router"));
const property_router_1 = __importDefault(require("./routes/property.router"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const account_router_1 = __importDefault(require("./routes/account.router"));
const xendit_router_1 = __importDefault(require("./routes/xendit.router"));
const review_router_1 = __importDefault(require("./routes/review.router"));
const category_router_1 = __importDefault(require("./routes/category.router"));
// import { initializeAutoCheckInOut } from "./services/transaction/autoCheckInOut.Service";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/samples", sample_router_1.default);
app.use("/transactions", transaction_router_1.default);
app.use("/properties", property_router_1.default);
app.use("/auth", auth_router_1.default);
app.use("/account", account_router_1.default);
app.use("/xendit", xendit_router_1.default);
app.use("/reviews", review_router_1.default);
app.use("/categories", category_router_1.default);
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
// initializeAutoCheckInOut();
app.listen(config_1.PORT, () => {
    console.log(`server running on PORT: ${config_1.PORT}`);
});
