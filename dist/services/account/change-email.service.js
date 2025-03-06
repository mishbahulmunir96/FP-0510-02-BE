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
exports.changeEmailService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const nodemailer_1 = require("../../lib/nodemailer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const changeEmailService = (userId, newEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
        throw new Error("Invalid email format");
    }
    const user = yield prisma_1.default.user.findUnique({
        where: { id: userId, isDeleted: false },
    });
    if (!user)
        throw new Error("User not found");
    const existingUser = yield prisma_1.default.user.findFirst({
        where: {
            email: { equals: newEmail, mode: "insensitive" },
            isDeleted: false,
        },
    });
    if (existingUser)
        throw new Error("Email already in use");
    const verificationToken = jsonwebtoken_1.default.sign({
        email: newEmail,
        createdAt: new Date().toISOString(),
    }, process.env.JWT_SECRET, { expiresIn: "1h" });
    try {
        const partialsDir = path_1.default.join(__dirname, "../../templates/partials");
        const partialFiles = fs_1.default.readdirSync(partialsDir);
        partialFiles.forEach((file) => {
            const matches = /^([^.]+).hbs$/.exec(file);
            if (!matches)
                return;
            const name = matches[1];
            const source = fs_1.default.readFileSync(path_1.default.join(partialsDir, file), "utf8");
            handlebars_1.default.registerPartial(name, source);
        });
        const templatePath = path_1.default.join(__dirname, "../../templates/verifyEmail.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf8");
        const template = handlebars_1.default.compile(templateSource);
        const emailHtml = template({
            name: user.name,
            verificationLink: `${process.env.BASE_URL_FE}/verify-email?token=${verificationToken}`,
            logoUrl: "your-logo-url",
            appName: "RateHaven",
            year: new Date().getFullYear(),
            appAddress: "Your App Address",
            expiryTime: "1 hour",
        });
        yield nodemailer_1.transporter.sendMail({
            from: process.env.GMAIL_EMAIL,
            to: newEmail,
            subject: "Verify Your Email",
            html: emailHtml,
        });
        yield prisma_1.default.user.update({
            where: { id: userId },
            data: { token: verificationToken },
        });
        return {
            message: "Verification email sent successfully",
            expiresIn: "1h",
        };
    }
    catch (error) {
        console.error("Email error:", error);
        throw new Error("Failed to send verification email");
    }
});
exports.changeEmailService = changeEmailService;
