"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const property_controller_1 = require("../controllers/property.controller");
const router = (0, express_1.Router)();
router.get("/", property_controller_1.getPropertiesController);
exports.default = router;
