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
exports.deleteRoomService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteRoomService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Cari room berdasarkan id
        const room = yield prisma_1.default.room.findUnique({
            where: { id },
        });
        if (!room) {
            throw new Error("Room not found");
        }
        const property = yield prisma_1.default.property.findUnique({
            where: { id: room.propertyId },
        });
        if ((property === null || property === void 0 ? void 0 : property.tenantId) !== userId) {
            throw new Error("You don't have permission to delete this room");
        }
        // Soft delete data yang terkait dengan room
        // Update soft delete untuk fasilitas ruangan
        yield prisma_1.default.roomFacility.updateMany({
            where: { roomId: id },
            data: { isDeleted: true },
        });
        // Update soft delete untuk gambar ruangan
        yield prisma_1.default.roomImage.updateMany({
            where: { roomId: id },
            data: { isDeleted: true },
        });
        // Update soft delete untuk data non-availability ruangan
        yield prisma_1.default.roomNonAvailability.updateMany({
            where: { roomId: id },
            data: { isDeleted: true },
        });
        // Update soft delete untuk tarif musim puncak ruangan
        yield prisma_1.default.peakSeasonRate.updateMany({
            where: { roomId: id },
            data: { isDeleted: true },
        });
        // Soft delete room itu sendiri
        yield prisma_1.default.room.update({
            where: { id },
            data: { isDeleted: true },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteRoomService = deleteRoomService;
