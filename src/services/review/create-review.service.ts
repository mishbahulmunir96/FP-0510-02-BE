import { StatusPayment } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

interface CreateReviewBody {
  userId: number;
  paymentId: number;
  rating: number;
  review: string;
}

export const createReviewService = async (body: CreateReviewBody) => {
  try {
    const { userId, paymentId, rating, review } = body;

    const payment = await prisma.payment.findUnique({
      where: {
        id: paymentId,
        userId,
        status: StatusPayment.CHECKED_OUT,
      },
      include: {
        reservation: {
          include: {
            room: {
              include: {
                property: true,
              },
            },
          },
        },
      },
    });

    if (!payment) {
      throw new Error("Transaction not found or not eligible for review");
    }

    const existingReview = await prisma.review.findFirst({
      where: {
        paymentId,
        userId,
      },
    });

    if (existingReview) {
      throw new Error("Review already exists for this payment");
    }

    const propertyId = payment.reservation[0]?.room.property.id;

    if (!propertyId) {
      throw new Error("Property not found");
    }

    const newReview = await prisma.review.create({
      data: {
        rating,
        review,
        userId,
        paymentId,
        propertyId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
          },
        },
        property: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    return newReview;
  } catch (error) {
    throw error;
  }
};
