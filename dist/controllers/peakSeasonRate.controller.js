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
exports.getPeakSeasons = exports.deletePeakSeasonRate = exports.updatePeakSeasonRate = exports.createPeakSeasonRate = void 0;
const create_season_rate_service_1 = require("../services/peak-season-rate/create-season-rate.service");
const update_season_rate_service_1 = require("../services/peak-season-rate/update-season-rate.service");
const delete_season_rate_service_1 = require("../services/peak-season-rate/delete-season-rate.service");
const get_peak_season_service_1 = require("../services/peak-season-rate/get-peak-season.service");
const createPeakSeasonRate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, create_season_rate_service_1.createPeakSeasonRateManagementService)(Number(res.locals.user.id), req.body);
        res.status(201).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createPeakSeasonRate = createPeakSeasonRate;
const updatePeakSeasonRate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, update_season_rate_service_1.updatePeakSeasonRateManagementService)(Number(res.locals.user.id), Number(req.params.id), req.body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updatePeakSeasonRate = updatePeakSeasonRate;
const deletePeakSeasonRate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, delete_season_rate_service_1.deletePeakSeasonRateManagementService)(Number(res.locals.user.id), Number(req.params.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deletePeakSeasonRate = deletePeakSeasonRate;
const getPeakSeasons = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            take: Number(req.query.take) || 10,
            page: Number(req.query.page) || 1,
            sortBy: String(req.query.sortBy) || "createdAt",
            sortOrder: String(req.query.sortOrder) || "desc",
            search: String(req.query.search) || "",
            price: Number(req.query.price) || undefined,
            roomId: Number(req.query.roomId) || undefined,
            startDate: req.query.startDate
                ? new Date(String(req.query.startDate))
                : undefined,
            endDate: req.query.endDate
                ? new Date(String(req.query.endDate))
                : undefined,
        };
        const result = yield (0, get_peak_season_service_1.getPeakSeasonsService)(query, Number(res.locals.user.id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getPeakSeasons = getPeakSeasons;
