import prisma from "../../lib/prisma";

interface ReplyReviewBody {
  userId: number;
  reviewId: number;
  replyMessage: string;
}

export const replyReviewService = async (body: ReplyReviewBody) => {
  try {
    const { userId, reviewId, replyMessage } = body;

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId,
        isDeleted: false,
      },
    });

    if (!tenant) {
      throw new Error("Tenant not found");
    }

    const review = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
      include: {
        property: {
          include: {
            tenant: true,
          },
        },
      },
    });

    if (!review) {
      throw new Error("Review not found");
    }

    if (review.property.tenant.id !== tenant.id) {
      throw new Error(
        "Unauthorized: You can only reply to reviews on your properties"
      );
    }

    if (review.replyMessage) {
      throw new Error("Review has already been replied to");
    }

    const updatedReview = await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        replyMessage,
        replyDate: new Date(),
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

    return updatedReview;
  } catch (error) {
    throw error;
  }
};
