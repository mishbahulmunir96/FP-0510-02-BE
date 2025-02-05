"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xendit_node_1 = require("xendit-node");
const config_1 = require("../config");
const xendit = new xendit_node_1.Xendit({
    secretKey: config_1.XENDIT_SECRET_KEY,
});
exports.default = xendit;
