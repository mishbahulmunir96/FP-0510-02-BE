import prisma from "../../lib/prisma";

export const getReviewByTransactionService = async (
  paymentId: number,
  userId: number
) => {
  try {
    const review = await prisma.review.findFirst({
      where: {
        paymentId,
        userId,
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
                    property: {
                      select: {
                        title: true,
                        location: true,
                      },
                    },
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
    });

    if (!review) {
      return null;
    }

    return {
      id: review.id,
      rating: review.rating,
      review: review.review,
      replyMessage: review.replyMessage,
      replyDate: review.replyDate,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
      user: {
        id: review.user.id,
        name: review.user.name,
        email: review.user.email,
        imageUrl: review.user.imageUrl,
      },
      property: review.payment.reservation[0]?.room.property
        ? {
            title: review.payment.reservation[0].room.property.title,
            location: review.payment.reservation[0].room.property.location,
          }
        : null,
      room: review.payment.reservation[0]?.room
        ? {
            type: review.payment.reservation[0].room.type,
            price: review.payment.reservation[0].room.price,
            images: review.payment.reservation[0].room.roomImage,
            facilities: review.payment.reservation[0].room.roomFacility,
          }
        : null,
    };
  } catch (error) {
    throw error;
  }
};
