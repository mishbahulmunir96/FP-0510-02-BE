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
exports.deletePropertyService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deletePropertyService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Cari properti berdasarkan id
        const property = yield prisma_1.default.property.findUnique({
            where: { id },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        // Validasi user
        const user = yield prisma_1.default.user.findUnique({
            where: { id: userId, isDeleted: false },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have permission to delete property");
        }
        // Cari tenant yang terkait dengan user
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        // Pastikan properti yang akan dihapus dimiliki oleh tenant tersebut
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        // Cari semua room terkait properti
        const rooms = yield prisma_1.default.room.findMany({
            where: { propertyId: id },
            select: { id: true },
        });
        const roomIds = rooms.map((room) => room.id);
        // Update soft delete untuk data yang berkaitan dengan room
        yield prisma_1.default.roomFacility.updateMany({
            where: { roomId: { in: roomIds } },
            data: { isDeleted: true },
        });
        yield prisma_1.default.roomImage.updateMany({
            where: { roomId: { in: roomIds } },
            data: { isDeleted: true },
        });
        yield prisma_1.default.roomNonAvailability.updateMany({
            where: { roomId: { in: roomIds } },
            data: { isDeleted: true },
        });
        yield prisma_1.default.peakSeasonRate.updateMany({
            where: { roomId: { in: roomIds } },
            data: { isDeleted: true },
        });
        // Update soft delete untuk room yang terkait dengan properti
        yield prisma_1.default.room.updateMany({
            where: { propertyId: id },
            data: { isDeleted: true },
        });
        // Update soft delete untuk data yang berkaitan langsung dengan properti
        yield prisma_1.default.propertyFacility.updateMany({
            where: { propertyId: id },
            data: { isDeleted: true },
        });
        yield prisma_1.default.propertyImage.updateMany({
            where: { propertyId: id },
            data: { isDeleted: true },
        });
        // Update soft delete untuk properti itu sendiri
        yield prisma_1.default.property.update({
            where: { id },
            data: { isDeleted: true },
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deletePropertyService = deletePropertyService;
