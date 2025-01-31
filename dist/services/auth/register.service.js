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
exports.registerService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const nodemailer_1 = require("../../lib/nodemailer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cloudinary_1 = require("../../lib/cloudinary");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const registerService = (data, file) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, role, name } = data;
    // Cek apakah email sudah terdaftar
    const existingUser = yield prisma_1.default.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("Email already registered");
    }
    // Upload gambar jika ada
    let imageUrl = "";
    if (file) {
        try {
            const result = yield (0, cloudinary_1.cloudinaryUpload)(file);
            imageUrl = result.secure_url;
        }
        catch (uploadError) {
            throw new Error("Image upload failed");
        }
    }
    // Buat token verifikasi email dengan expiry 1 jam
    const verificationToken = jsonwebtoken_1.default.sign({
        email,
        createdAt: new Date().toISOString(),
    }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
    try {
        // Buat User dan Tenant (jika diperlukan) dalam transaksi
        const user = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = yield prisma.user.create({
                data: {
                    name: data.name,
                    email: data.email,
                    imageUrl,
                    token: verificationToken,
                    role: role,
                    isVerified: false, // Memastikan user belum terverifikasi
                },
            });
            if (role === "TENANT") {
                if (!data.phoneNumber || !data.bankName || !data.bankNumber) {
                    throw new Error("Tenant data incomplete");
                }
                yield prisma.tenant.create({
                    data: {
                        name: data.name,
                        phoneNumber: data.phoneNumber,
                        bankName: data.bankName,
                        bankNumber: data.bankNumber,
                        imageUrl,
                        userId: newUser.id,
                    },
                });
            }
            return newUser;
        }));
        // Load dan register partials
        const partialsDir = path_1.default.join(__dirname, "../../templates/partials");
        const partialFiles = fs_1.default.readdirSync(partialsDir);
        partialFiles.forEach((file) => {
            const matches = /^([^.]+).hbs$/.exec(file);
            if (!matches)
                return;
            const name = matches[1];
            const filepath = path_1.default.join(partialsDir, file);
            const source = fs_1.default.readFileSync(filepath, "utf8");
            handlebars_1.default.registerPartial(name, source);
        });
        // Load dan compile template utama
        const mainTemplatePath = path_1.default.join(__dirname, "../../templates/verifyEmail.hbs");
        const mainTemplateSource = fs_1.default.readFileSync(mainTemplatePath, "utf8");
        const mainTemplate = handlebars_1.default.compile(mainTemplateSource);
        // Data untuk template
        const replacements = {
            name: data.name,
            verificationLink: `${process.env.BASE_URL_FE}/verify?token=${verificationToken}`,
            logoUrl: process.env.LOGO_URL,
            appName: process.env.APP_NAME || "RateHaven",
            year: new Date().getFullYear(),
            appAddress: process.env.APP_ADDRESS || "RateHaven Address, Yogyakarta, Indonesia",
            expiryTime: "1 hour",
        };
        // Render HTML email
        const emailHtml = mainTemplate(replacements);
        // Kirim email verifikasi
        yield nodemailer_1.transporter.sendMail({
            from: process.env.GMAIL_EMAIL,
            to: email,
            subject: "Verify Your Email",
            html: emailHtml,
        });
        return {
            message: "Registration successful, please check your email",
            userId: user.id,
        };
    }
    catch (error) {
        throw new Error(`Registration failed: ${error.message}`);
    }
});
exports.registerService = registerService;
