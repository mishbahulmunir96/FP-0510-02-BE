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
exports.sendForgotPasswordEmail = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const forgotPassword_1 = require("../templates/forgotPassword");
const nodemailer_1 = require("./nodemailer");
const sendForgotPasswordEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, link } = data;
    const template = handlebars_1.default.compile(forgotPassword_1.forgotPasswordTemplate);
    const html = template({
        email,
        link,
    });
    const mailOptions = {
        from: `"RateHaven" <${process.env.GMAIL_EMAIL}>`,
        to: email,
        subject: "Reset Your Password",
        html,
    };
    try {
        yield nodemailer_1.transporter.sendMail(mailOptions);
        // console.log(`Forgot password email sent to ${email} successfully!`);
    }
    catch (error) {
        console.error("Error sending forgot password email:", error);
    }
});
exports.sendForgotPasswordEmail = sendForgotPasswordEmail;
