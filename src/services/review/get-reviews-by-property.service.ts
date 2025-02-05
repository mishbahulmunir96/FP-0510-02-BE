import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getReviewsByPropertyService = async (
  propertyId: number,
  query: PaginationQueryParams
) => {
  try {
    const { page, take, sortBy, sortOrder } = query;

    const reviews = await prisma.review.findMany({
      where: {
        propertyId,
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
        payment: {
          select: {
            reservation: {
              include: {
                room: {
                  select: {
                    type: true,
                    price: true,
                    roomImage: {
                      select: {
                        imageUrl: true,
                      },
                    },
                    roomFacility: {
                      select: {
                        title: true,
                        description: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      skip: (page - 1) * take,
      take,
      orderBy: { [sortBy]: sortOrder },
    });

    const count = await prisma.review.count({
      where: {
        propertyId,
      },
    });

    const averageRating = await prisma.review.aggregate({
      where: {
        propertyId,
      },
      _avg: {
        rating: true,
      },
    });

    return {
      data: reviews.map((review) => ({
        id: review.id,
        rating: review.rating,
        review: review.review,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt,
        user: {
          id: review.user.id,
          name: review.user.name,
          email: review.user.email,
          imageUrl: review.user.imageUrl,
        },
        room: review.payment.reservation[0]?.room
          ? {
              type: review.payment.reservation[0].room.type,
              price: review.payment.reservation[0].room.price,
              images: review.payment.reservation[0].room.roomImage,
              facilities: review.payment.reservation[0].room.roomFacility,
            }
          : null,
      })),
      meta: {
        page,
        take,
        total: count,
        averageRating: averageRating._avg.rating || 0,
      },
    };
  } catch (error) {
    throw error;
  }
};
