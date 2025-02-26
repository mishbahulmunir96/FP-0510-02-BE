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
exports.createRoomService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const cloudinary_1 = require("../../lib/cloudinary");
const createRoomService = (body, file, tenantId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, name, stock, price, guest, propertyId, facilityTitle, facilityDescription, } = body;
        const propertyIdNoNaN = Number(propertyId);
        const stockRoom = Number(stock);
        const priceRoom = Number(price);
        const guestRoom = Number(guest);
        // Validasi keberadaan property
        const property = yield prisma_1.default.property.findFirst({
            where: { id: propertyIdNoNaN },
        });
        if (!property) {
            throw new Error("Property id not found");
        }
        let secureUrl;
        if (file) {
            const uploadResult = yield (0, cloudinary_1.cloudinaryUpload)(file);
            secureUrl = uploadResult.secure_url;
        }
        // Buat room dan fasilitasnya dalam sebuah transaksi
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Membuat record room
            const newRoom = yield tx.room.create({
                data: {
                    type, // Menggunakan field type dari body (enum)
                    name,
                    stock: stockRoom,
                    price: priceRoom,
                    guest: guestRoom,
                    property: {
                        connect: { id: propertyIdNoNaN },
                    },
                },
            });
            // Jika file diunggah, buat record gambar untuk room
            if (file && secureUrl) {
                yield tx.roomImage.create({
                    data: {
                        imageUrl: secureUrl,
                        roomId: newRoom.id,
                    },
                });
            }
            // Buat fasilitas room menggunakan facilityTitle dan facilityDescription
            yield tx.roomFacility.create({
                data: {
                    title: facilityTitle,
                    description: facilityDescription,
                    roomId: newRoom.id,
                },
            });
            return {
                message: "Create Room success",
                data: newRoom,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.createRoomService = createRoomService;
