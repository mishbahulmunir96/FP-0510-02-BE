import { Request, Response, NextFunction } from "express";
import { createRoomReservationService } from "../services/transaction/createRoomReservation.service";

export const createRoomReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const reservationData = {
      userId,
      roomId: req.body.roomId,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
    };

    const result = await createRoomReservationService(reservationData);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};
