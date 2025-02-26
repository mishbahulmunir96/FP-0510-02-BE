"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.cancelTransactionByTenantService = void 0;
const nodemailer_1 = require("../../lib/nodemailer");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const hbs = __importStar(require("handlebars"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const cancelTransactionByTenantService = (paymentId, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma_1.default.payment.findFirst({
            where: {
                id: paymentId,
                status: "WAITING_FOR_PAYMENT",
                paymentProof: null,
                reservation: {
                    some: {
                        room: {
                            property: {
                                tenantId,
                            },
                        },
                    },
                },
            },
            include: {
                user: true,
                reservation: {
                    include: {
                        room: {
                            include: {
                                property: true,
                            },
                        },
                    },
                },
            },
        });
        if (!payment) {
            throw new Error("Transaction not found or cannot be cancelled");
        }
        const cancelledPayment = yield prisma_1.default.payment.update({
            where: { id: paymentId },
            data: { status: "CANCELLED" },
        });
        const templatePath = path.join(__dirname, "../../templates/payment-cancelled.hbs");
        const template = fs.readFileSync(templatePath, "utf8");
        const compiledTemplate = hbs.compile(template);
        const emailData = {
            userName: payment.user.name,
            propertyName: payment.reservation[0].room.property.title,
            transactionId: payment.uuid,
            totalPrice: payment.totalPrice,
        };
        yield nodemailer_1.transporter.sendMail({
            to: payment.user.email,
            subject: "Booking Cancelled by Property Owner",
            html: compiledTemplate(emailData),
        });
        return cancelledPayment;
    }
    catch (error) {
        throw error;
    }
});
exports.cancelTransactionByTenantService = cancelTransactionByTenantService;
