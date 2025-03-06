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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomsController = getRoomsController;
exports.getRoomsTenantController = getRoomsTenantController;
exports.getRoomController = getRoomController;
exports.createRoomController = createRoomController;
exports.deleteRoomController = deleteRoomController;
exports.updateRoomController = updateRoomController;
const get_rooms_service_1 = require("../services/room/get-rooms.service");
const get_rooms_tenant_service_1 = require("../services/room/get-rooms-tenant.service");
const get_room_service_1 = require("../services/room/get-room.service");
const create_room_service_1 = require("../services/room/create-room.service");
const delete_room_service_1 = require("../services/room/delete-room.service");
const update_room_service_1 = require("../services/room/update-room.service");
function getRoomsController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 10,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "desc",
                search: req.query.search || "",
            };
            const result = yield (0, get_rooms_service_1.getRoomsService)(query);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getRoomsTenantController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 10,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "desc",
                search: req.query.search || "",
            };
            const result = yield (0, get_rooms_tenant_service_1.getRoomsTenantService)(query, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getRoomController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, get_room_service_1.getRoomService)(Number(req.params.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function createRoomController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Parse facilities from the request body if they come as a string
            if (req.body.facilities && typeof req.body.facilities === "string") {
                try {
                    req.body.facilities = JSON.parse(req.body.facilities);
                }
                catch (e) {
                    throw new Error("Invalid facilities format. Expected a JSON array.");
                }
            }
            // Ensure facilities is an array
            if (!req.body.facilities || !Array.isArray(req.body.facilities)) {
                throw new Error("Facilities must be provided as an array");
            }
            const result = yield (0, create_room_service_1.createRoomService)(req.body, req.file, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function deleteRoomController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, delete_room_service_1.deleteRoomService)(Number(req.params.id), Number(res.locals.user.id));
            res.status(200).send({ message: "Delete room success", result });
        }
        catch (error) {
            next(error);
        }
    });
}
function updateRoomController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.facilities && typeof req.body.facilities === "string") {
                try {
                    req.body.facilities = JSON.parse(req.body.facilities);
                }
                catch (e) {
                    throw new Error("Invalid facilities format. Expected a JSON array.");
                }
            }
            if (req.body.facilities !== undefined &&
                !Array.isArray(req.body.facilities)) {
                throw new Error("Facilities must be provided as an array");
            }
            const result = yield (0, update_room_service_1.updateRoomService)(Number(req.params.id), req.body, req.file);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
