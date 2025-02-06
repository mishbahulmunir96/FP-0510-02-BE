import { NextFunction, Request, Response } from "express";
import { createRoomNonAvailabilityService } from "../services/room-non-availability/create-room-non-availability.service";
import { deleteRoomNonAvailabilityService } from "../services/room-non-availability/delete-room-non-availabilities.service";
import { getRoomNonAvailabilitiesService } from "../services/room-non-availability/get-room-non-availabilities.service";
import { updateRoomNonAvailabilityService } from "../services/room-non-availability/update-room-non-availability.service";

export async function createRoomNonAvailabilityController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await createRoomNonAvailabilityService(
      Number(res.locals.user.id),
      req.body
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function updateRoomNonAvailabilitiyController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await updateRoomNonAvailabilityService(
      Number(req.params.id),
      req.body
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteRoomNonAvailabilityController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await deleteRoomNonAvailabilityService(
      Number(req.params.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getRoomNonAvailabilitiesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "asc",
      search: (req.query.search as string) || "",
      reason: (req.query.reason as string) || "",
      roomId: req.query.roomId ? Number(req.query.roomId) : undefined,
      startDate: req.query.startDate
        ? new Date(req.query.startDate as string)
        : undefined,
      endDate: req.query.endDate
        ? new Date(req.query.endDate as string)
        : undefined,
    };

    const result = await getRoomNonAvailabilitiesService(
      query,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}
