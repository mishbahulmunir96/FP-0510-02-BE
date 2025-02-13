import prisma from "../../lib/prisma";
import { PropertyReport } from "../../types/report";

interface GetPropertyReportParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  propertyId?: number;
}

export const getPropertyReportService = async ({
  tenantId,
  startDate,
  endDate,
  propertyId,
}: GetPropertyReportParams): Promise<PropertyReport[]> => {
  try {
    // Validasi property jika propertyId diberikan
    if (propertyId) {
      const propertyExists = await prisma.property.findFirst({
        where: {
          id: propertyId,
          tenantId,
          isDeleted: false,
        },
      });

      if (!propertyExists) {
        throw new Error("Property not found or unauthorized");
      }
    }

    const properties = await prisma.property.findMany({
      where: {
        tenantId,
        ...(propertyId && { id: propertyId }),
        isDeleted: false,
      },
      include: {
        room: {
          where: {
            isDeleted: false,
          },
          include: {
            reservation: {
              where: {
                payment: {
                  status: {
                    in: ["CHECKED_IN", "CHECKED_OUT"],
                  },
                  createdAt: {
                    gte: startDate,
                    lte: endDate,
                  },
                },
              },
              include: {
                payment: true,
              },
            },
          },
        },
        review: {
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
          select: {
            rating: true,
          },
        },
      },
    });

    const reports = await Promise.all(
      properties.map(async (property) => {
        // Hitung total transaksi dan pendapatan
        const allReservations = property.room.flatMap(
          (room) => room.reservation
        );
        const totalTransactions = allReservations.length;
        const totalRevenue = allReservations.reduce(
          (sum, reservation) => sum + reservation.price,
          0
        );

        // Hitung occupancy rate
        const totalDays = Math.ceil(
          (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        const totalRooms = property.room.reduce(
          (sum, room) => sum + room.stock,
          0
        );
        const totalPossibleRoomDays = totalRooms * totalDays;
        const occupiedRoomDays = allReservations.reduce(
          (total, reservation) => {
            const checkIn = new Date(reservation.startDate);
            const checkOut = new Date(reservation.endDate);

            // Pastikan tanggal dalam range yang diminta
            const effectiveStartDate =
              checkIn < startDate ? startDate : checkIn;
            const effectiveEndDate = checkOut > endDate ? endDate : checkOut;

            const stayDuration = Math.ceil(
              (effectiveEndDate.getTime() - effectiveStartDate.getTime()) /
                (1000 * 60 * 60 * 24)
            );

            return total + stayDuration;
          },
          0
        );

        const occupancyRate =
          totalPossibleRoomDays > 0
            ? Number(
                ((occupiedRoomDays / totalPossibleRoomDays) * 100).toFixed(2)
              )
            : 0;

        // Hitung rata-rata rating
        const averageRating =
          property.review.length > 0
            ? Number(
                (
                  property.review.reduce(
                    (sum, review) => sum + review.rating,
                    0
                  ) / property.review.length
                ).toFixed(2)
              )
            : 0;

        // Hitung detail per room
        const roomDetails = property.room.map((room) => {
          const roomReservations = room.reservation;
          const totalBookings = roomReservations.length;
          const roomRevenue = roomReservations.reduce(
            (sum, reservation) => sum + reservation.price,
            0
          );

          // Hitung rata-rata durasi menginap
          const stayDurations = roomReservations.map((reservation) => {
            const start = new Date(reservation.startDate);
            const end = new Date(reservation.endDate);
            return Math.ceil(
              (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
            );
          });

          const averageStayDuration =
            stayDurations.length > 0
              ? Number(
                  (
                    stayDurations.reduce((sum, duration) => sum + duration, 0) /
                    stayDurations.length
                  ).toFixed(2)
                )
              : 0;

          return {
            roomId: room.id,
            roomType: room.type,
            totalBookings,
            totalRevenue: roomRevenue,
            averageStayDuration,
            stock: room.stock,
          };
        });

        // Ambil 5 kamar terbaik berdasarkan jumlah booking
        const bestPerformingRooms = [...roomDetails]
          .sort((a, b) => b.totalBookings - a.totalBookings)
          .slice(0, 5);

        return {
          propertyId: property.id,
          propertyName: property.title,
          totalRevenue,
          totalTransactions,
          occupancyRate,
          averageRating,
          roomDetails,
          bestPerformingRooms,
          totalRooms: property.room.reduce(
            (total, room) => total + room.stock,
            0
          ),
        };
      })
    );

    return reports;
  } catch (error) {
    throw error;
  }
};
