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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
        const existingRoom = yield prisma_1.default.room.findUnique({
            where: { id },
            include: {
                roomImage: true,
                roomFacility: {
                    where: { isDeleted: false },
                },
            },
        });
        if (!existingRoom) {
            throw new Error("Room not found");
        }
        let secureUrl;
        if (file) {
            const uploadResult = yield (0, cloudinary_1.cloudinaryUpload)(file);
            secureUrl = uploadResult.secure_url;
        }
        if (body.stock !== undefined) {
            body.stock = Number(body.stock);
        }
        if (body.price !== undefined) {
            body.price = Number(body.price);
        }
        if (body.guest !== undefined) {
            body.guest = Number(body.guest);
        }
        if ("propertyId" in body) {
            delete body["propertyId"];
        }
        const { facilities } = body, roomData = __rest(body, ["facilities"]);
        const updatedData = Object.assign({}, roomData);
        return yield prisma_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            const updatedRoom = yield tx.room.update({
                where: { id },
                data: updatedData,
            });
            if (file && secureUrl) {
                if (existingRoom.roomImage.length > 0) {
                    yield tx.roomImage.update({
                        where: { id: existingRoom.roomImage[0].id },
                        data: { imageUrl: secureUrl },
                    });
                }
                else {
                    yield tx.roomImage.create({
                        data: {
                            imageUrl: secureUrl,
                            roomId: id,
                        },
                    });
                }
            }
<<<<<<< HEAD
=======

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
            if (facilities && Array.isArray(facilities)) {
                const existingFacilityIds = new Set(existingRoom.roomFacility.map((facility) => facility.id));
                for (const facility of facilities) {
                    if (facility.id && existingFacilityIds.has(facility.id)) {
                        if (facility.isDeleted) {
<<<<<<< HEAD
=======

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
                            yield tx.roomFacility.update({
                                where: { id: facility.id },
                                data: { isDeleted: true },
                            });
                        }
                        else {
<<<<<<< HEAD
=======

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
                            yield tx.roomFacility.update({
                                where: { id: facility.id },
                                data: {
                                    title: facility.title,
                                    description: facility.description,
                                },
                            });
                        }
<<<<<<< HEAD
                        existingFacilityIds.delete(facility.id);
                    }
                    else if (!facility.id) {
=======

                        existingFacilityIds.delete(facility.id);
                    }
                    else if (!facility.id) {

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
                        yield tx.roomFacility.create({
                            data: {
                                title: facility.title,
                                description: facility.description,
                                roomId: id,
                            },
                        });
                    }
                }
            }
<<<<<<< HEAD
=======

>>>>>>> 005ef401df3cf0d2b38b7821131c1a005e9001f8
            const roomWithRelations = yield tx.room.findUnique({
                where: { id: updatedRoom.id },
                include: {
                    roomFacility: {
                        where: { isDeleted: false },
                    },
                    roomImage: true,
                },
            });
            return {
                message: "Update room success",
                data: roomWithRelations,
            };
        }));
    }
    catch (error) {
        throw error;
    }
});
exports.updateRoomService = updateRoomService;
