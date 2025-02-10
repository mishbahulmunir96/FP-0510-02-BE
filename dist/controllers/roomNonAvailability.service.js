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
exports.createRoomNonAvailabilityController = createRoomNonAvailabilityController;
exports.updateRoomNonAvailabilitiyController = updateRoomNonAvailabilitiyController;
exports.deleteRoomNonAvailabilityController = deleteRoomNonAvailabilityController;
exports.getRoomNonAvailabilitiesController = getRoomNonAvailabilitiesController;
const create_room_non_availability_service_1 = require("../services/room-non-availability/create-room-non-availability.service");
const delete_room_non_availabilities_service_1 = require("../services/room-non-availability/delete-room-non-availabilities.service");
const get_room_non_availabilities_service_1 = require("../services/room-non-availability/get-room-non-availabilities.service");
const update_room_non_availability_service_1 = require("../services/room-non-availability/update-room-non-availability.service");
function createRoomNonAvailabilityController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, create_room_non_availability_service_1.createRoomNonAvailabilityService)(Number(res.locals.user.id), req.body);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function updateRoomNonAvailabilitiyController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, update_room_non_availability_service_1.updateRoomNonAvailabilityService)(Number(req.params.id), req.body);
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function deleteRoomNonAvailabilityController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield (0, delete_room_non_availabilities_service_1.deleteRoomNonAvailabilityService)(Number(req.params.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
function getRoomNonAvailabilitiesController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = {
                take: parseInt(req.query.take) || 10,
                page: parseInt(req.query.page) || 1,
                sortBy: req.query.sortBy || "createdAt",
                sortOrder: req.query.sortOrder || "asc",
                search: req.query.search || "",
                reason: req.query.reason || "",
                roomId: req.query.roomId ? Number(req.query.roomId) : undefined,
                startDate: req.query.startDate
                    ? new Date(req.query.startDate)
                    : undefined,
                endDate: req.query.endDate
                    ? new Date(req.query.endDate)
                    : undefined,
            };
            const result = yield (0, get_room_non_availabilities_service_1.getRoomNonAvailabilitiesService)(query, Number(res.locals.user.id));
            res.status(200).send(result);
        }
        catch (error) {
            next(error);
        }
    });
}
