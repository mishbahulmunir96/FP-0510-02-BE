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
exports.initializeCheckInReminder = void 0;
const node_schedule_1 = __importDefault(require("node-schedule"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const nodemailer_1 = require("../lib/nodemailer");
const hbs = __importStar(require("handlebars"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const client_1 = require("../../prisma/generated/client");
const initializeCheckInReminder = () => {
    node_schedule_1.default.scheduleJob("0 14 * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield sendCheckInReminders();
        }
        catch (error) {
            console.error("Check-in reminder error:", error);
        }
    }));
};
exports.initializeCheckInReminder = initializeCheckInReminder;
const sendCheckInReminders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(14, 0, 0, 0);
        const reservations = yield prisma_1.default.reservation.findMany({
            where: {
                startDate: tomorrow,
                payment: {
                    status: client_1.StatusPayment.PROCESSED,
                },
            },
            include: {
                room: {
                    include: {
                        property: {
                            include: {
                                propertyFacility: true,
                            },
                        },
                    },
                },
                payment: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        console.log(`Found ${reservations.length} reservations for tomorrow's check-in`);
        const templatePath = path.join(__dirname, "../templates/check-in-reminder.hbs");
        const template = fs.readFileSync(templatePath, "utf8");
        const compiledTemplate = hbs.compile(template);
        for (const reservation of reservations) {
            try {
                const startDate = new Date(reservation.startDate);
                const endDate = new Date(reservation.endDate);
                const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const facilities = reservation.room.property.propertyFacility.map((facility) => facility.title);
                const emailData = {
                    userName: reservation.payment.user.name,
                    propertyName: reservation.room.property.title,
                    roomType: reservation.room.type,
                    checkInDate: startDate.toLocaleDateString(),
                    checkOutDate: endDate.toLocaleDateString(),
                    duration: diffDays,
                    totalPrice: reservation.payment.totalPrice.toLocaleString(),
                    reservationId: reservation.payment.uuid,
                    propertyAddress: reservation.room.property.location,
                    propertyLandmark: reservation.room.property.location,
                    propertyContact: "Contact number",
                    facilities: facilities,
                };
                yield nodemailer_1.transporter.sendMail({
                    to: reservation.payment.user.email,
                    subject: "Reminder: Your Check-in Tomorrow",
                    html: compiledTemplate(emailData),
                });
                console.log(`Reminder sent for reservation: ${reservation.id}`);
            }
            catch (error) {
                console.error(`Failed to send reminder for reservation ${reservation.id}:`, error);
            }
        }
    }
    catch (error) {
        console.error("Error in sendCheckInReminders:", error);
        throw error;
    }
});
