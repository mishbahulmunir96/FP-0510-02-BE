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
exports.restoreRoomService = exports.deleteRoomService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteRoomService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield prisma_1.default.room.findFirst({
            where: {
                id,
                NOT: { isDeleted: true },
            },
            include: {
                property: {
                    include: {
                        tenant: true,
                    },
                },
            },
        });
        if (!room) {
            throw new Error("Room not found or already deleted");
        }
        if (!room.property || room.property.tenant.userId !== userId) {
            throw new Error("You don't have permission to delete this room");
        }
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
            yield Promise.all([
                tx.roomFacility.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: true,
                        updatedAt: currentDate,
                    },
                }),
                tx.roomImage.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: true,
                        updatedAt: currentDate,
                    },
                }),
                tx.roomNonAvailability.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: true,
                        updatedAt: currentDate,
                    },
                }),
                tx.peakSeasonRate.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: true,
                        updatedAt: currentDate,
                    },
                }),
            ]);
            const deletedRoom = yield tx.room.update({
                where: { id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
                include: {
                    roomFacility: {
                        where: { NOT: { isDeleted: true } },
                    },
                    roomImage: {
                        where: { NOT: { isDeleted: true } },
                    },
                    peakSeasonRate: {
                        where: { NOT: { isDeleted: true } },
                    },
                },
            });
            return {
                message: "Room successfully deleted",
                data: deletedRoom,
            };
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to delete room");
    }
});
exports.deleteRoomService = deleteRoomService;
const restoreRoomService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield prisma_1.default.room.findFirst({
            where: {
                id,
                isDeleted: true,
            },
            include: {
                property: {
                    include: {
                        tenant: true,
                    },
                },
            },
        });
        if (!room) {
            throw new Error("Deleted room not found");
        }
        if (!room.property || room.property.tenant.userId !== userId) {
            throw new Error("You don't have permission to restore this room");
        }
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
            yield Promise.all([
                tx.roomFacility.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: false,
                        updatedAt: currentDate,
                    },
                }),
                tx.roomImage.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: false,
                        updatedAt: currentDate,
                    },
                }),
                tx.roomNonAvailability.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: false,
                        updatedAt: currentDate,
                    },
                }),
                tx.peakSeasonRate.updateMany({
                    where: { roomId: id },
                    data: {
                        isDeleted: false,
                        updatedAt: currentDate,
                    },
                }),
            ]);
            const restoredRoom = yield tx.room.update({
                where: { id },
                data: {
                    isDeleted: false,
                    updatedAt: currentDate,
                },
                include: {
                    roomFacility: true,
                    roomImage: true,
                    peakSeasonRate: true,
                },
            });
            return {
                message: "Room successfully restored",
                data: restoredRoom,
            };
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to restore room");
    }
});
exports.restoreRoomService = restoreRoomService;
