import prisma from "../../lib/prisma";

export const getTransactionByTenantService = async (
  id: number,
  tenantId: number
) => {
  const transaction = await prisma.payment.findFirst({
    where: {
      id,
      reservation: {
        some: {
          room: {
            property: {
              tenantId,
            },
          },
        },
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
      reservation: {
        include: {
          room: {
            include: {
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
                where: { isDeleted: false },
                select: { title: true },
              },
            },
          },
        },
      },
    },
  });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return {
    id: transaction.id,
    uuid: transaction.uuid,
    customer: transaction.user,
    totalPrice: transaction.totalPrice,
    paymentMethode: transaction.paymentMethode,
    status: transaction.status,
    paymentProof: transaction.paymentProof,
    checkInDate: transaction.reservation[0]?.startDate,
    checkOutDate: transaction.reservation[0]?.endDate,
    duration: transaction.duration,
    updatedAt: transaction.updatedAt,
    reservations: transaction.reservation.map((reserv) => ({
      roomType: reserv.room.type,
      propertyTitle: reserv.room.property.title,
      roomPrice: reserv.price,
      propertyLocation: reserv.room.property.location,
      roomImages: reserv.room.roomImage.map((image) => image.imageUrl),
      roomFacilities: reserv.room.roomFacility.map(
        (facility) => facility.title
      ),
    })),
  };
};
