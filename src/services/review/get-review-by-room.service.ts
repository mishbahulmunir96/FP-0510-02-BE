import prisma from "../../lib/prisma";
import { PaginationQueryParams } from "../../types/pagination";

export const getReviewsByRoomService = async (
  roomId: number,
  query: PaginationQueryParams
) => {
  try {
    const { page, take, sortBy, sortOrder } = query;

    const reviews = await prisma.review.findMany({
      where: {
        payment: {
          reservation: {
            some: {
              roomId: roomId,
            },
          },
        },
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
              where: {
                roomId: roomId,
              },
              select: {
                startDate: true,
                endDate: true,
                price: true,
                room: {
                  select: {
                    type: true,
                    guest: true,
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
        payment: {
          reservation: {
            some: {
              roomId: roomId,
            },
          },
        },
      },
    });

    const averageRating = await prisma.review.aggregate({
      where: {
        payment: {
          reservation: {
            some: {
              roomId: roomId,
            },
          },
        },
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
        reservation: review.payment.reservation[0]
          ? {
              startDate: review.payment.reservation[0].startDate,
              endDate: review.payment.reservation[0].endDate,
              price: review.payment.reservation[0].price,
              room: {
                type: review.payment.reservation[0].room.type,
                guest: review.payment.reservation[0].room.guest,
                images: review.payment.reservation[0].room.roomImage,
                facilities: review.payment.reservation[0].room.roomFacility,
              },
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
