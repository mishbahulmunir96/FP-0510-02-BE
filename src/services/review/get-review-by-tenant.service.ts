import prisma from "../../lib/prisma";

export const getReviewByTenantService = async (paymentId: number) => {
  try {
    const review = await prisma.review.findFirst({
      where: {
        paymentId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
          },
        },
        property: true,
      },
    });

    return review;
  } catch (error) {
    throw error;
  }
};
