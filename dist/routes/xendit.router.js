"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const xendit_controller_1 = require("../controllers/xendit.controller");
const xendit_midleware_1 = require("../middlewares/xendit.midleware");
const router = (0, express_1.Router)();
router.post("/callback", xendit_midleware_1.xenditWebhookMiddleware, xendit_controller_1.xenditController);
exports.default = router;
