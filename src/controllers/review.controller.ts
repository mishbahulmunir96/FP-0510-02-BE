import { Request, Response, NextFunction } from "express";
import { createReviewService } from "../services/review/create-review.service";

export const createReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;

    const reviewData = {
      userId,
      paymentId: req.body.paymentId,
      rating: req.body.rating,
      review: req.body.review,
    };

    const result = await createReviewService(reviewData);

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};
