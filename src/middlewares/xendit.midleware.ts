import { NextFunction, Request, Response } from "express";
import { XENDIT_CALLBACK_TOKEN } from "../config";

export const xenditWebhookMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const xenditToken = req.headers["x-callback-token"];

    if (typeof xenditToken !== "string") {
      throw new Error("Invalid token format");
    }

    if (xenditToken !== XENDIT_CALLBACK_TOKEN) {
      throw new Error("Unauthorized webhook request");
    }

    next();
  } catch (error) {
    next(error);
  }
};
