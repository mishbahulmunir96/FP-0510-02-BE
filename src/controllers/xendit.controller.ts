import { NextFunction, Request, Response } from "express";
import { xenditCallbackService } from "../services/xendit/xendit-callback.service";

export const xenditController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await xenditCallbackService(req.body);

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
