import { NextFunction, Request, Response } from "express";
import { getRoomsService } from "../services/room/get-rooms.service";
import { getRoomsTenantService } from "../services/room/get-rooms-tenant.service";
import { getRoomService } from "../services/room/get-room.service";
import { createRoomService } from "../services/room/create-room.service";
import { deleteRoomService } from "../services/room/delete-room.service";
import { updateRoomService } from "../services/room/update-room.service";

export async function getRoomsController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
    };
    const result = await getRoomsService(query);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getRoomsTenantController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query = {
      take: parseInt(req.query.take as string) || 10,
      page: parseInt(req.query.page as string) || 1,
      sortBy: (req.query.sortBy as string) || "createdAt",
      sortOrder: (req.query.sortOrder as string) || "desc",
      search: (req.query.search as string) || "",
    };
    const result = await getRoomsTenantService(
      query,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function getRoomController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await getRoomService(Number(req.params.id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function createRoomController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await createRoomService(
      req.body,
      req.file!,
      Number(res.locals.user.id)
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

export async function deleteRoomController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await deleteRoomService(
      Number(req.params.id),
      Number(res.locals.user.id)
    );
    res.status(200).send({ message: "Delete room success", result });
  } catch (error) {
    next(error);
  }
}

export async function updateRoomController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await updateRoomService(
      Number(req.params.id),
      req.body,
      req.file!
    );
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}
