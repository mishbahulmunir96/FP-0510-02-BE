import { NextFunction, Request, Response } from "express";
import { createReviewService } from "../services/review/create-review.service";
import { getReviewByTransactionService } from "../services/review/get-review-by-transaction.service";
import { getReviewsByPropertyService } from "../services/review/get-reviews-by-property.service";
import { replyReviewService } from "../services/review/create-review-reply.service";

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

export const getReviewsByPropertyController = async (
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

    const result = await getReviewsByPropertyService(propertyId, {
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

export const getReviewByTransactionController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;
    const paymentId = parseInt(req.params.paymentId);

    if (isNaN(paymentId)) {
      throw new Error("Invalid payment ID");
    }

    const result = await getReviewByTransactionService(paymentId, userId);

    if (!result) {
      res.status(404).send({
        message: "Review not found",
      });
      return;
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const replyReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.user.id;
    const { reviewId } = req.params;

    const replyData = {
      userId,
      reviewId: parseInt(reviewId),
      replyMessage: req.body.replyMessage,
    };

    const result = await replyReviewService(replyData);

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
