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
exports.verifyChangeEmailService = void 0;
const argon_1 = require("../../lib/argon");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyChangeEmailService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ token, password, }) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const tokenCreationTime = new Date(decoded.createdAt).getTime();
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        if (currentTime - tokenCreationTime > oneHour) {
            throw new Error("Verification link has expired");
        }
        const user = yield prisma_1.default.user.findFirst({
            where: { token },
        });
        if (!user)
            throw new Error("Invalid verification token");
        if ((password === null || password === void 0 ? void 0 : password.length) < 8) {
            throw new Error("Password must be at least 8 characters");
        }
        const hashedPassword = password ? yield (0, argon_1.hashPassword)(password) : undefined;
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: {
                email: decoded.email,
                password: hashedPassword,
                token: null,
            },
        });
        return {
            message: "Email verified successfully",
            email: decoded.email,
        };
    }
    catch (error) {
        if (error.name === "JsonWebTokenError") {
            throw new Error("Invalid verification token");
        }
        throw error;
    }
});
exports.verifyChangeEmailService = verifyChangeEmailService;
