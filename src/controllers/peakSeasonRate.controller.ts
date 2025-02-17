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
  next: NextFunction,
) => {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || 'createdAt',
      sortOrder: (req.query.sortOrder as string) || 'asc',
      search: (req.query.search as string) || '',
      price: Number(req.query.search) || 0,
      roomId: Number(req.query.search) || 0,
      startDate: new Date(req.query.search as string) || undefined,
      endDate: new Date(req.query.search as string) || undefined,
    };
    
    const result = await getPeakSeasonsService(
      query,
      Number(res.locals.user.id),
    );
     res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};