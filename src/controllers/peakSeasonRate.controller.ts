import { NextFunction, Request, Response } from "express";
import { createPeakSeasonRateManagementService } from "../services/peak-season-rate/create-season-rate.service";
import { updatePeakSeasonRateManagementService } from "../services/peak-season-rate/update-season-rate.service";
import { deletePeakSeasonRateManagementService } from "../services/peak-season-rate/delete-season-rate.service";
import { getPeakSeasonsService } from "../services/peak-season-rate/get-peak-season.service";

export const createPeakSeasonRate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createPeakSeasonRateManagementService(
      Number(res.locals.user.id),
      req.body
    );
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const updatePeakSeasonRate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updatePeakSeasonRateManagementService(
      Number(res.locals.user.id),
      Number(req.params.id),
      req.body
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deletePeakSeasonRate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deletePeakSeasonRateManagementService(
      Number(res.locals.user.id),
      Number(req.params.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getPeakSeasons = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

    const result = await getPeakSeasonsService(
      query,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
