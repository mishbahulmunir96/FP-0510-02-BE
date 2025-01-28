import { NextFunction, Request, Response } from "express";
import { TokenExpiredError, verify } from "jsonwebtoken";
import { JWT_SECRET_DUMMY } from "../config";

export const verifyTokenDummy = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({
      message: "authentication failed, token missing",
    });

    return;
  }

  verify(token, JWT_SECRET_DUMMY!, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        res.status(401).send({ message: "Token expired" });
        return;
      } else {
        res.status(401).send({ message: "invalid token" });
        return;
      }
    }

    res.locals.user = payload;

    next();
  });
};
