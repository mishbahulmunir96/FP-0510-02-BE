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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordService = void 0;
const argon_1 = require("../../lib/argon");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const changePasswordService = (userId_1, _a) => __awaiter(void 0, [userId_1, _a], void 0, function* (userId, { password, newPassword }) {
    const user = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    if (!user) {
        throw new Error("User not found");
    }
    // Pastikan password di DB tidak null
    if (!user.password) {
        throw new Error("User has no password set");
    }
    const match = yield (0, argon_1.comparePassword)(password, user.password);
    if (!match) {
        throw new Error("Current password is incorrect");
    }
    const hashed = yield (0, argon_1.hashPassword)(newPassword);
    yield prisma_1.default.user.update({
        where: { id: userId },
        data: { password: hashed },
    });
    return { message: "Change password success" };
});
exports.changePasswordService = changePasswordService;
