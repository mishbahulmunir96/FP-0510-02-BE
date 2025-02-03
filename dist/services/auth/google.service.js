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
exports.loginWithGoogleService = void 0;
const config_1 = require("../../config");
const getUserInfo_1 = require("../../lib/getUserInfo");
const nodemailer_1 = require("../../lib/nodemailer");
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const loginWithGoogleService = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = yield (0, getUserInfo_1.getUserInfo)(accessToken);
        if (!userInfo) {
            return {
                status: 400,
                message: "Failed to get user info from google",
            };
        }
        const user = yield prisma_1.default.user.findFirst({
            where: {
                email: userInfo.email,
                isDeleted: false, // Sesuai schema yang memiliki field isDeleted
            },
        });
        if (user && user.provider !== "GOOGLE") {
            throw new Error("Email sudah terdaftar menggunakan metode login lain");
        }
        let newUser;
        if (!user) {
            newUser = yield prisma_1.default.user.create({
                data: {
                    email: userInfo.email,
                    name: userInfo.name,
                    isVerified: true,
                    provider: "GOOGLE",
                    role: "USER", // Sesuai enum Role dalam schema
                    imageUrl: userInfo.picture, // Jika ada dari Google
                    isDeleted: false,
                },
            });
            yield nodemailer_1.transporter.sendMail({
                from: '"Admin RateHaven" <admin@ratehaven.com>',
                to: userInfo.email,
                subject: "Selamat Datang di RateHaven",
                html: `
          <h1>Welcome to RateHaven!</h1>
          <p>Hello ${userInfo.name},</p>
          <p>Thank you for registering with RateHaven.</p>
        `,
            });
        }
        if (!config_1.JWT_SECRET) {
            throw new Error("JWT_SECRET tidak dikonfigurasi");
        }
        const userId = (newUser === null || newUser === void 0 ? void 0 : newUser.id) || (user === null || user === void 0 ? void 0 : user.id);
        if (!userId) {
            throw new Error("User ID not found");
        }
        const token = (0, jsonwebtoken_1.sign)({ id: userId }, config_1.JWT_SECRET, {
            expiresIn: "2h",
        });
        // Update token di database
        yield prisma_1.default.user.update({
            where: { id: userId },
            data: { token },
        });
        return {
            message: `Halo ${userInfo.name}`,
            data: newUser || user,
            token,
        };
    }
    catch (error) {
        console.error("Login with Google error:", error);
        throw error;
    }
});
exports.loginWithGoogleService = loginWithGoogleService;
