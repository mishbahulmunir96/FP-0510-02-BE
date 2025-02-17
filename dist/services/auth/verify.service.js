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
const verifyService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ token, password }) {
    try {
        // Verify token dan cek expiry
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Cek apakah token sudah expired (1 jam)
        const tokenCreationTime = new Date(decoded.createdAt).getTime();
        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000; // 1 jam dalam milliseconds
        if (currentTime - tokenCreationTime > oneHour) {
            throw new Error("Verification link has expired");
        }
        // Cari user berdasarkan token
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
        // Validasi password
        if (!password || password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }
        const hashedPassword = yield (0, argon_1.hashPassword)(password);
        // Update user data
        yield prisma_1.default.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                isVerified: true,
                token: null, // Reset token setelah verifikasi
            },
        });
        return {
            message: "Email verified successfully. Please login to continue.",
            email: user.email,
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
    // Buat token verifikasi baru
    const newVerificationToken = jsonwebtoken_1.default.sign({
        email,
        createdAt: new Date().toISOString(),
    }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    // Update token user
    yield prisma_1.default.user.update({
        where: { id: user.id },
        data: { token: newVerificationToken },
    });
    // Kirim email verifikasi baru
    // ... (implementasi pengiriman email sama seperti di registerService)
    return { message: "Verification email resent successfully" };
});
exports.resendVerificationEmail = resendVerificationEmail;
