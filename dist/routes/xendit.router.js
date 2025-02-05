"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const xendit_controller_1 = require("../controllers/xendit.controller");
const router = (0, express_1.Router)();
router.post("/", xendit_controller_1.xenditController);
exports.default = router;
