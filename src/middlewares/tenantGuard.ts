import { NextFunction, Request, Response } from "express";

export const tenantGuard = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.locals.user.role !== "TENANT") {
    res.status(400).send("Only tenant can access");
  }

  next();
};
