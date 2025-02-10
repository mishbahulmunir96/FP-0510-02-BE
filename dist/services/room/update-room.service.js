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
exports.updateRoomService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const cloudinary_1 = require("../../lib/cloudinary");
const updateRoomService = (id, body, file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Cari room berdasarkan id beserta relasi roomImage
        const existingRoom = yield prisma_1.default.room.findUnique({
            where: { id },
            include: { roomImage: true },
        });
        if (!existingRoom) {
            throw new Error("Room not found");
        }
        let secureUrl;
        if (file) {
            const uploadResult = yield (0, cloudinary_1.cloudinaryUpload)(file);
            secureUrl = uploadResult.secure_url;
        }
        // Pastikan field numeric dikonversi ke number (jika body dikirim sebagai string)
        if (body.stock !== undefined) {
            body.stock = Number(body.stock);
        }
        if (body.price !== undefined) {
            body.price = Number(body.price);
        }
        if (body.guest !== undefined) {
            body.guest = Number(body.guest);
        }
        // Pastikan propertyId tidak diupdate jika ada di body
        if ("propertyId" in body) {
            delete body["propertyId"];
        }
        const updatedData = Object.assign({}, body);
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // Update data room
            const updatedRoom = yield tx.room.update({
                where: { id },
                data: updatedData,
            });
            // Jika file diunggah, update atau buat record roomImage
            if (file && secureUrl) {
                if (existingRoom.roomImage.length > 0) {
                    // Update gambar room pertama yang ada
                    yield tx.roomImage.update({
                        where: { id: existingRoom.roomImage[0].id },
                        data: { imageUrl: secureUrl },
                    });
                }
                else {
                    // Buat record roomImage baru
                    yield tx.roomImage.create({
                        data: {
                            imageUrl: secureUrl,
                            roomId: id,
                        },
                    });
                }
            }
            return {
                message: "Update room success",
                data: updatedRoom,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.updateRoomService = updateRoomService;
