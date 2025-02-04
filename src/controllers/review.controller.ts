import { NextFunction, Request, Response } from "express";
import { createReviewService } from "../services/review/create-review.service";
import { getReviewsService } from "../services/review/get-reviews.service";

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

export const getReviewsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const propertyId = parseInt(req.params.propertyId);
    const page = parseInt(req.query.page as string) || 1;
    const take = parseInt(req.query.take as string) || 10;
    const sortBy = (req.query.sortBy as string) || "createdAt";
    const sortOrder = (req.query.sortOrder as string) || "desc";

    if (isNaN(propertyId)) {
      throw new Error("Invalid property ID");
    }

    const result = await getReviewsService(propertyId, {
      page,
      take,
      sortBy,
      sortOrder,
    });

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
