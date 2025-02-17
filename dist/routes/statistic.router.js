"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../lib/jwt");
const isTenant_1 = require("../lib/isTenant");
const statistic_controller_1 = require("../controllers/statistic.controller");
const router = (0, express_1.Router)();
router.get("/property", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getPropertyReportController);
router.get("/transaction", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getTransactionReportController);
router.get("/user", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getUserReportController);
exports.default = router;
