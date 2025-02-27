import prisma from "../../lib/prisma";
import { normalizeToUTC } from "../../utils/date.utils";
import { format } from "date-fns";

export interface SalesReport {
  propertyMetrics: {
    propertyId: number;
    propertyName: string;
    totalRevenue: number;
    totalTransactions: number;
    occupancyRate: number;
    averageRating: number;
    totalRooms: number;
    roomDetails: {
      roomId: number;
      roomType: string;
      totalBookings: number;
      totalRevenue: number;
      averageStayDuration: number;
      stock: number;
    }[];
    bestPerformingRooms: {
      roomId: number;
      roomType: string;
      totalBookings: number;
      stock: number;
    }[];
  }[];

  transactionMetrics: {
    totalTransactions: number;
    totalRevenue: number;
    averageTransactionValue: number;
    paymentMethodDistribution: {
      MANUAL: { count: number; percentage: number };
      OTOMATIS: { count: number; percentage: number };
    };
    paymentStatusBreakdown: {
      successRate: number;
      cancellationRate: number;
      pendingRate: number;
      totalSuccessful: number;
      totalCancelled: number;
      totalPending: number;
    };
    peakBookingPeriods: {
      date: string;
      totalBookings: number;
      totalRevenue: number;
    }[];
    averageBookingDuration: number;
    averageBookingLeadTime: number;
  };
}

interface GetSalesReportParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  propertyId?: number;
}

const groupDataByPeriod = (
  payments: any[],
  startDate: Date,
  endDate: Date
): { date: string; totalBookings: number; totalRevenue: number }[] => {
  const diffInDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  let groupingFunction: (date: Date) => string;

  if (diffInDays <= 7) {
    groupingFunction = (date) => format(normalizeToUTC(date), "yyyy-MM-dd");
  } else if (diffInDays <= 31) {
    groupingFunction = (date) => {
      const weekNumber = Math.ceil(date.getDate() / 7);
      return `${format(normalizeToUTC(date), "yyyy-MM")}-W${weekNumber}`;
    };
  } else {
    groupingFunction = (date) => format(normalizeToUTC(date), "yyyy-MM");
  }

  const groupedData = payments.reduce(
    (
      acc: {
        [key: string]: {
          date: string;
          totalBookings: number;
          totalRevenue: number;
        };
      },
      payment
    ) => {
      const date = new Date(payment.createdAt);
      const key = groupingFunction(date);

      if (!acc[key]) {
        acc[key] = {
          date: key,
          totalBookings: 0,
          totalRevenue: 0,
        };
      }

      acc[key].totalBookings += 1;
      acc[key].totalRevenue += payment.totalPrice;

      return acc;
    },
    {}
  );

  return Object.values(groupedData).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
};

export const getSalesReportService = async ({
  tenantId,
  startDate,
  endDate,
  propertyId,
}: GetSalesReportParams): Promise<SalesReport> => {
  try {
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
        const allReservations = property.room.flatMap(
          (room) => room.reservation
        );

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
          (utcEndDate.getTime() - utcStartDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );
        const totalRooms = property.room.reduce(
          (sum, room) => sum + room.stock,
          0
        );
        const totalPossibleRoomDays = totalRooms * totalDays;

        const occupiedRoomDays = allReservations.reduce(
          (total, reservation) => {
            const checkIn = normalizeToUTC(new Date(reservation.startDate));
            const checkOut = normalizeToUTC(new Date(reservation.endDate));

            const effectiveStartDate =
              checkIn < utcStartDate ? utcStartDate : checkIn;
            const effectiveEndDate =
              checkOut > utcEndDate ? utcEndDate : checkOut;

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

    const propertyIds = properties.map((p) => p.id);

    const payments = await prisma.payment.findMany({
      where: {
        createdAt: {
          gte: utcStartDate,
          lte: utcEndDate,
        },
        reservation: {
          some: {
            room: {
              property: {
                id: { in: propertyIds },
                isDeleted: false,
              },
            },
          },
        },
      },
      include: {
        reservation: {
          include: {
            room: true,
            payment: true,
          },
        },
      },
    });

    const totalTransactions = payments.length;
    const totalRevenue = payments.reduce(
      (sum, payment) => sum + payment.totalPrice,
      0
    );
    const averageTransactionValue =
      totalTransactions > 0
        ? Number((totalRevenue / totalTransactions).toFixed(2))
        : 0;

    const paymentMethods = payments.reduce(
      (acc, payment) => {
        acc[payment.paymentMethode].count += 1;
        return acc;
      },
      {
        MANUAL: { count: 0, percentage: 0 },
        OTOMATIS: { count: 0, percentage: 0 },
      }
    );

    if (totalTransactions > 0) {
      paymentMethods.MANUAL.percentage = Number(
        ((paymentMethods.MANUAL.count / totalTransactions) * 100).toFixed(2)
      );
      paymentMethods.OTOMATIS.percentage = Number(
        ((paymentMethods.OTOMATIS.count / totalTransactions) * 100).toFixed(2)
      );
    }

    const successfulPayments = payments.filter((p) =>
      ["CHECKED_IN", "PROCESSED", "CHECKED_OUT"].includes(p.status)
    ).length;
    const cancelledPayments = payments.filter(
      (p) => p.status === "CANCELLED"
    ).length;
    const pendingPayments = payments.filter((p) =>
      ["WAITING_FOR_PAYMENT", "WAITING_FOR_PAYMENT_CONFIRMATION"].includes(
        p.status
      )
    ).length;

    const paymentStatusBreakdown = {
      successRate:
        totalTransactions > 0
          ? Number(((successfulPayments / totalTransactions) * 100).toFixed(2))
          : 0,
      cancellationRate:
        totalTransactions > 0
          ? Number(((cancelledPayments / totalTransactions) * 100).toFixed(2))
          : 0,
      pendingRate:
        totalTransactions > 0
          ? Number(((pendingPayments / totalTransactions) * 100).toFixed(2))
          : 0,
      totalSuccessful: successfulPayments,
      totalCancelled: cancelledPayments,
      totalPending: pendingPayments,
    };

    const peakBookingPeriods = groupDataByPeriod(
      payments,
      utcStartDate,
      utcEndDate
    );

    const allReservations = payments.flatMap((p) => p.reservation);
    const durations = allReservations.map((reservation) => {
      const start = normalizeToUTC(new Date(reservation.startDate));
      const end = normalizeToUTC(new Date(reservation.endDate));
      return Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
    });

    const averageBookingDuration =
      durations.length > 0
        ? Number(
            (
              durations.reduce((sum, duration) => sum + duration, 0) /
              durations.length
            ).toFixed(2)
          )
        : 0;

    const leadTimes = allReservations.map((reservation) => {
      const bookingDate = normalizeToUTC(
        new Date(reservation.payment.createdAt)
      );
      const checkInDate = normalizeToUTC(new Date(reservation.startDate));
      return Math.ceil(
        (checkInDate.getTime() - bookingDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    });

    const averageBookingLeadTime =
      leadTimes.length > 0
        ? Number(
            (
              leadTimes.reduce((sum, time) => sum + time, 0) / leadTimes.length
            ).toFixed(2)
          )
        : 0;

    return {
      propertyMetrics,
      transactionMetrics: {
        totalTransactions,
        totalRevenue,
        averageTransactionValue,
        paymentMethodDistribution: paymentMethods,
        paymentStatusBreakdown,
        peakBookingPeriods,
        averageBookingDuration,
        averageBookingLeadTime,
      },
    };
  } catch (error) {
    console.error("Error in getSalesReportService:", error);
    throw error;
  }
};
