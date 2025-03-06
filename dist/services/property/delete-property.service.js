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
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id: userId,
                NOT: { isDeleted: true },
            },
        });
        if (!user) {
            throw new Error("User not found");
        }
        if (user.role !== "TENANT") {
            throw new Error("User doesn't have permission to delete property");
        }
        const tenant = yield prisma_1.default.tenant.findFirst({
            where: {
                userId: user.id,
                NOT: { isDeleted: true },
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id,
                NOT: { isDeleted: true },
            },
        });
        if (!property) {
            throw new Error("Property not found");
        }
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
            yield tx.roomFacility.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.roomImage.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.roomNonAvailability.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.peakSeasonRate.updateMany({
                where: {
                    room: {
                        propertyId: id,
                    },
                },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.room.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.propertyFacility.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.propertyImage.updateMany({
                where: { propertyId: id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
            });
            yield tx.review.updateMany({
                where: { propertyId: id },
                data: {
                    updatedAt: currentDate,
                },
            });
            const deletedProperty = yield tx.property.update({
                where: { id },
                data: {
                    isDeleted: true,
                    updatedAt: currentDate,
                },
                include: {
                    propertyImage: {
                        where: {
                            NOT: { isDeleted: true },
                        },
                    },
                    propertyCategory: true,
                    room: {
                        where: {
                            NOT: { isDeleted: true },
                        },
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
const restorePropertyService = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_1.default.user.findFirst({
            where: {
                id: userId,
                NOT: { isDeleted: true },
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
                NOT: { isDeleted: true },
            },
        });
        if (!tenant) {
            throw new Error("Tenant not found");
        }
        const property = yield prisma_1.default.property.findFirst({
            where: {
                id,
                isDeleted: true,
            },
        });
        if (!property) {
            throw new Error("Deleted property not found");
        }
        if (property.tenantId !== tenant.id) {
            throw new Error("Property doesn't belong to the tenant");
        }
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const currentDate = new Date();
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
            const restoredProperty = yield tx.property.update({
                where: { id },
                data: {
                    isDeleted: false,
                    updatedAt: currentDate,
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
