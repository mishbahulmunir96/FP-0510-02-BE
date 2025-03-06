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
exports.resendVerificationEmail = exports.verifyService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const argon_1 = require("../../lib/argon");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ token, password, name }) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const tokenCreationTime = new Date(decoded.createdAt).getTime();
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        if (currentTime - tokenCreationTime > oneHour) {
            throw new Error("Verification link has expired");
        }
        const user = yield prisma_1.default.user.findFirst({
            where: {
                token,
                email: decoded.email,
            },
        });
        if (!user) {
            throw new Error("Invalid verification token");
        }
        if (user.isVerified) {
            throw new Error("Email already verified");
        }
        if (!password || password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
        if (!name || name.trim().length === 0) {
            throw new Error("Name is required");
        }
        const hashedPassword = yield (0, argon_1.hashPassword)(password);
        const updatedUser = yield prisma_1.default.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                isVerified: true,
                token: null,
                name: name.trim(),
            },
        });
        return {
            message: "Email verified successfully. Please login to continue.",
            email: updatedUser.email,
            name: updatedUser.name,
        };
    }
    catch (error) {
        if (error.name === "JsonWebTokenError") {
            throw new Error("Invalid verification token");
        }
        if (error.name === "TokenExpiredError") {
            throw new Error("Verification link has expired");
        }
        throw new Error(error.message);
    }
});
exports.verifyService = verifyService;
const resendVerificationEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("User not found");
    }
    if (user.isVerified) {
        throw new Error("Email already verified");
    }
    const newVerificationToken = jsonwebtoken_1.default.sign({
        email,
        createdAt: new Date().toISOString(),
    }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    yield prisma_1.default.user.update({
        where: { id: user.id },
        data: { token: newVerificationToken },
    });
    return { message: "Verification email resent successfully" };
});
exports.resendVerificationEmail = resendVerificationEmail;
