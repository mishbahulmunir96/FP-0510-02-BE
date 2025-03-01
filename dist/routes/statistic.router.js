"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistic_controller_1 = require("../controllers/statistic.controller");
const isTenant_1 = require("../lib/isTenant");
const jwt_1 = require("../lib/jwt");
const router = (0, express_1.Router)();
<<<<<<< HEAD
router.get("/property", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getPropertyReportController);
router.get("/transaction", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getTransactionReportController);
router.get("/user", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getUserReportController);
=======
router.get("/report", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getSalesReportController);
>>>>>>> fddae4311966ca9c4ec118f7cc6a13e6d288c173
router.get("/calendar-report", jwt_1.verifyToken, isTenant_1.isTenant, statistic_controller_1.getPropertyCalendarReportController);
exports.default = router;
