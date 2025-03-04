import prisma from "../../lib/prisma";
import { normalizeToUTC } from "../../utils/dateUtils";

export interface PropertyMetricsParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  propertyId?: number;
}

export interface RoomDetail {
  roomId: number;
  roomType: string;
  totalBookings: number;
  totalRevenue: number;
  averageStayDuration: number;
  stock: number;
}

export interface BestPerformingRoom {
  roomId: number;
  roomType: string;
  totalBookings: number;
  stock: number;
}

export interface PropertyMetric {
  propertyId: number;
  propertyName: string;
  totalRevenue: number;
  totalTransactions: number;
  occupancyRate: number;
  averageRating: number;
  roomDetails: RoomDetail[];
  bestPerformingRooms: BestPerformingRoom[];
  totalRooms: number;
}

export const getPropertyMetricsService = async ({
  tenantId,
  startDate,
  endDate,
  propertyId,
}: PropertyMetricsParams): Promise<PropertyMetric[]> => {
  const utcStartDate = normalizeToUTC(startDate);
  const utcEndDate = normalizeToUTC(endDate);

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
                createdAt: {
                  gte: utcStartDate,
                  lte: utcEndDate,
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
            gte: utcStartDate,
            lte: utcEndDate,
          },
        },
        select: {
          rating: true,
        },
      },
    },
  });

  const propertyMetrics = await Promise.all(
    properties.map(async (property) => {
      const allReservations = property.room.flatMap((room) => room.reservation);

      const paymentGroups = allReservations.reduce((groups, reservation) => {
        const paymentId = reservation.payment.id;
        if (!groups[paymentId]) {
          groups[paymentId] = {
            payment: reservation.payment,
            reservations: [],
          };
        }
        groups[paymentId].reservations.push(reservation);
        return groups;
      }, {} as Record<number, { payment: any; reservations: typeof allReservations }>);

      const totalRevenue = Object.values(paymentGroups).reduce(
        (sum, group) => sum + group.payment.totalPrice,
        0
      );

      const totalTransactions = Object.keys(paymentGroups).length;

      const totalDays = Math.ceil(
        (utcEndDate.getTime() - utcStartDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const totalRooms = property.room.reduce(
        (sum, room) => sum + room.stock,
        0
      );
      const totalPossibleRoomDays = totalRooms * totalDays;

      const occupiedRoomDays = allReservations.reduce((total, reservation) => {
        const checkIn = normalizeToUTC(new Date(reservation.startDate));
        const checkOut = normalizeToUTC(new Date(reservation.endDate));

        const effectiveStartDate =
          checkIn < utcStartDate ? utcStartDate : checkIn;
        const effectiveEndDate = checkOut > utcEndDate ? utcEndDate : checkOut;

        const stayDuration = Math.ceil(
          (effectiveEndDate.getTime() - effectiveStartDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        return total + stayDuration;
      }, 0);

      const occupancyRate =
        totalPossibleRoomDays > 0
          ? Math.max(
              0,
              Number(
                ((occupiedRoomDays / totalPossibleRoomDays) * 100).toFixed(2)
              )
            )
          : 0;

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

      const roomDetails = property.room.map((room) => {
        const roomReservations = room.reservation;
        const totalBookings = roomReservations.length;

        const roomPaymentGroups = roomReservations.reduce(
          (groups, reservation) => {
            const paymentId = reservation.payment.id;
            if (!groups[paymentId]) {
              groups[paymentId] = {
                payment: reservation.payment,
                reservations: [],
              };
            }
            groups[paymentId].reservations.push(reservation);
            return groups;
          },
          {} as Record<
            number,
            { payment: any; reservations: typeof roomReservations }
          >
        );

        const roomRevenue = Object.values(roomPaymentGroups).reduce(
          (sum, group) => {
            if (group.reservations.length === 1) {
              return sum + group.payment.totalPrice;
            }
            const paymentTotal = group.payment.totalPrice;
            const reservationTotal = group.reservations.reduce(
              (total, res) => total + res.price,
              0
            );
            const roomReservationTotal = group.reservations
              .filter((res) => res.roomId === room.id)
              .reduce((total, res) => total + res.price, 0);
            return (
              sum + (paymentTotal * roomReservationTotal) / reservationTotal
            );
          },
          0
        );

        const stayDurations = roomReservations.map((reservation) => {
          const start = normalizeToUTC(new Date(reservation.startDate));
          const end = normalizeToUTC(new Date(reservation.endDate));
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

      const bestPerformingRooms = [...roomDetails]
        .sort((a, b) => b.totalBookings - a.totalBookings)
        .slice(0, 5)
        .map((room) => ({
          roomId: room.roomId,
          roomType: room.roomType,
          totalBookings: room.totalBookings,
          stock: room.stock,
        }));

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

  return propertyMetrics;
};
