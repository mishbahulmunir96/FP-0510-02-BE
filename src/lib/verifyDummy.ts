import { Request, Response, NextFunction } from "express";

const DUMMY_TOKEN = "joko@mail.com";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token === DUMMY_TOKEN) {
    res.locals.user = { id: 3 };
    return next();
  }

  if (!token) {
    return res.status(401).send({
      message: "Authentication failed, token missing",
    });
  }

  return res
    .status(401)
    .send({ message: "Invalid token or not a dummy token" });
};
