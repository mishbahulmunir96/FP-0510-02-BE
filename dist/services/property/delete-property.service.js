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
exports.restorePropertyService = exports.deletePropertyService = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deletePropertyService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate user
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id: userId,
                NOT: { isDeleted: true }
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have permission to delete property");
        }
        // Validate tenant
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                NOT: { isDeleted: true }
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        // Validate property
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id,
                NOT: { isDeleted: true }
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        // Perform soft delete using transaction
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
            // 1. Soft delete all room facilities
            yield tx.roomFacility.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 2. Soft delete all room images
            yield tx.roomImage.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 3. Soft delete all room non-availabilities
            yield tx.roomNonAvailability.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 4. Soft delete all peak season rates
            yield tx.peakSeasonRate.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 5. Soft delete all rooms
            yield tx.room.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 6. Soft delete property facilities
            yield tx.propertyFacility.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 7. Soft delete property images
            yield tx.propertyImage.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
            });
            // 8. Mark property reviews as deleted
            // Note: You might want to keep reviews for historical purposes
            yield tx.review.updateMany({
                where: { propertyId: id },
                data: {
                    updatedAt: currentDate
                },
            });
            // 9. Finally soft delete the property
            const deletedProperty = yield tx.property.update({
                where: { id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate
                },
                include: {
                    propertyImage: {
                        where: {
                            NOT: { isDeleted: true }
                        }
                    },
                    propertyCategory: true,
                    room: {
                        where: {
                            NOT: { isDeleted: true }
                        }
                    },
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
// Optional: Add a service to restore a soft-deleted property
const restorePropertyService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Similar validation as delete
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id: userId,
                NOT: { isDeleted: true }
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have permission to restore property");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                NOT: { isDeleted: true }
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id,
                isDeleted: true
            },
        });
        if (!property) {
            throw new Error("Deleted property not found");
        }
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        // Restore property and related entities
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
            // Restore all related entities
            yield Promise.all([
                tx.roomFacility.updateMany({
                    where: { room: { propertyId: id } },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.roomImage.updateMany({
                    where: { room: { propertyId: id } },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.roomNonAvailability.updateMany({
                    where: { room: { propertyId: id } },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.peakSeasonRate.updateMany({
                    where: { room: { propertyId: id } },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.room.updateMany({
                    where: { propertyId: id },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.propertyFacility.updateMany({
                    where: { propertyId: id },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
                tx.propertyImage.updateMany({
                    where: { propertyId: id },
                    data: { isDeleted: false, updatedAt: currentDate },
                }),
            ]);
            // Finally restore the property
            const restoredProperty = yield tx.property.update({
                where: { id },
                data: {
                    isDeleted: false,
                    updatedAt: currentDate
                },
                include: {
                    propertyImage: true,
                    propertyCategory: true,
                    room: true,
                },
            });
            return {
                message: "Property successfully restored",
                data: restoredProperty,
            };
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Failed to restore property");
    }
});
exports.restorePropertyService = restorePropertyService;
