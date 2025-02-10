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
        // Validasi tenant
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: { userId: user.id, isDeleted: false },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        // Validasi property
        const property = yield prisma_1.default.property.findUnique({
            where: { id },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        // Lakukan hard delete menggunakan transaction
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // 1. Delete semua room facilities
            yield tx.roomFacility.deleteMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
            });
            // 2. Delete semua room images
            yield tx.roomImage.deleteMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
            });
            // 3. Delete semua room non-availabilities
            yield tx.roomNonAvailability.deleteMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
            });
            // 4. Delete semua peak season rates
            yield tx.peakSeasonRate.deleteMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
            });
            // 5. Delete semua rooms
            yield tx.room.deleteMany({
                where: { propertyId: id },
            });
            // 6. Delete property facilities
            yield tx.propertyFacility.deleteMany({
                where: { propertyId: id },
            });
            // 7. Delete property images
            yield tx.propertyImage.deleteMany({
                where: { propertyId: id },
            });
            // 8. Delete property reviews
            yield tx.review.deleteMany({
                where: { propertyId: id },
            });
            // 9. Finally delete the property
            const deletedProperty = yield tx.property.delete({
                where: { id },
                include: {
                    propertyImage: true,
                    propertyCategory: true,
                    room: true,
                },
            });
            return {
                message: "Property successfully deleted",
                data: deletedProperty,
            };
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to delete property");
    }
});
exports.deletePropertyService = deletePropertyService;
