import { Request, Response, NextFunction } from "express";

export const isTenant = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  if (user && user.role === "TENANT") {
    return next();
  }

  res.status(403).json({
    status: "error",
    message: "Access denied. Only organizers can do this action.",
  });
};
