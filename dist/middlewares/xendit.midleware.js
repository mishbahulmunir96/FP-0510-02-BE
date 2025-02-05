"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xenditWebhookMiddleware = void 0;
const config_1 = require("../config");
const xenditWebhookMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const xenditToken = req.headers["x-callback-token"];
        if (typeof xenditToken !== "string") {
            throw new Error("Invalid token format");
        }
        if (xenditToken !== config_1.XENDIT_CALLBACK_TOKEN) {
            throw new Error("Unauthorized webhook request");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.xenditWebhookMiddleware = xenditWebhookMiddleware;
