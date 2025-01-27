import { generateTokenService } from "../services/generate-token.service";
import { NextFunction, Request, Response } from "express";

export const generateTokenController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await generateTokenService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
