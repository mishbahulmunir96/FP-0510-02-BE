// services/statistic/get-user-report.service.ts
import { Payment, Reservation } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { UserReport } from "../../types/report";
import { normalizeToUTC } from "../../utils/date.utils";

interface GetUserReportParams {
  tenantId: number;
  startDate: Date;
  endDate: Date;
  limit?: number;
}

interface PaymentWithDetails extends Payment {
  user: {
    id: number;
    name: string;
    review: {
      rating: number;
    }[];
  };
  reservation: Reservation[];
}

interface UserBookingDetails {
  userId: number;
  name: string;
  bookings: PaymentWithDetails[];
  totalSpent: number;
}

export const getUserReportService = async ({
  tenantId,
  startDate,
  endDate,
  limit = 10,
}: GetUserReportParams): Promise<UserReport> => {
  try {
    const utcStartDate = normalizeToUTC(startDate);
    const utcEndDate = normalizeToUTC(endDate);

    // Get all payments for tenant's properties with user data
    const payments = (await prisma.payment.findMany({
      where: {
        createdAt: {
          gte: utcStartDate,
          lte: utcEndDate,
        },
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
            id: true,
            name: true,
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
        },
        reservation: true,
      },
    })) as PaymentWithDetails[];

    // Calculate total unique users
    const uniqueUsers = new Set(payments.map((p) => p.userId));
    const totalUniqueUsers = uniqueUsers.size;

    // Calculate user booking frequencies
    const userBookings = payments.reduce((acc, payment) => {
      if (!acc[payment.userId]) {
        acc[payment.userId] = {
          userId: payment.userId,
          name: payment.user.name,
          bookings: [],
          totalSpent: 0,
        };
      }
      acc[payment.userId].bookings.push(payment);
      acc[payment.userId].totalSpent += payment.totalPrice;
      return acc;
    }, {} as Record<number, UserBookingDetails>);

    const repeatCustomers = Object.values(userBookings)
      .filter((user) => user.bookings.length > 1)
      .map((user) => ({
        userId: user.userId,
        name: user.name,
        totalBookings: user.bookings.length,
      }));

    // Calculate top spenders
    const topSpenders = Object.values(userBookings)
      .map((user) => ({
        userId: user.userId,
        name: user.name,
        totalSpent: user.totalSpent,
        totalBookings: user.bookings.length,
        averageSpending: Number(
          (user.totalSpent / user.bookings.length).toFixed(2)
        ),
      }))
      .sort((a, b) => b.totalSpent - a.totalSpent)
      .slice(0, limit);

    const bookingPatterns = Object.values(userBookings).map((user) => {
      const userPayments = user.bookings;
      const totalBookings = userPayments.length;

      const stayDurations = userPayments.flatMap((payment) =>
        payment.reservation.map((res) => {
          const start = normalizeToUTC(new Date(res.startDate));
          const end = normalizeToUTC(new Date(res.endDate));
          return Math.ceil(
            (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
          );
        })
      );

      const averageStayDuration =
        stayDurations.length > 0
          ? Number(
              (
                stayDurations.reduce((sum, duration) => sum + duration, 0) /
                stayDurations.length
              ).toFixed(2)
            )
          : 0;

      const paymentMethods = userPayments.reduce(
        (acc: Record<string, number>, payment) => {
          acc[payment.paymentMethode] = (acc[payment.paymentMethode] || 0) + 1;
          return acc;
        },
        {}
      );

      const preferredPaymentMethod = Object.entries(paymentMethods).sort(
        (a, b) => b[1] - a[1]
      )[0][0];

      const totalCancellations = userPayments.filter(
        (payment) => payment.status === "CANCELLED"
      ).length;

      return {
        userId: user.userId,
        name: user.name,
        bookings: {
          totalBookings,
          averageStayDuration,
          preferredPaymentMethod,
          totalCancellations,
        },
      };
    });

    const totalSpending = payments.reduce(
      (sum, payment) => sum + payment.totalPrice,
      0
    );
    const averageSpendingPerUser =
      totalUniqueUsers > 0
        ? Number((totalSpending / totalUniqueUsers).toFixed(2))
        : 0;

    const allRatings = payments.flatMap((p) =>
      p.user.review.map((r) => r.rating)
    );
    const ratingCounts = allRatings.reduce((acc, rating) => {
      acc[rating] = (acc[rating] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const ratingDistribution = Object.entries(ratingCounts).map(
      ([rating, count]) => ({
        rating: Number(rating),
        count,
        percentage:
          allRatings.length > 0
            ? Number(((count / allRatings.length) * 100).toFixed(2))
            : 0,
      })
    );

    return {
      totalUniqueUsers,
      repeatCustomers: {
        count: repeatCustomers.length,
        percentage:
          totalUniqueUsers > 0
            ? Number(
                ((repeatCustomers.length / totalUniqueUsers) * 100).toFixed(2)
              )
            : 0,
        users: repeatCustomers,
      },
      topSpenders,
      bookingPatterns,
      averageSpendingPerUser,
      ratingDistribution,
    };
  } catch (error) {
    console.error("Error in getUserReportService:", error);
    throw error;
  }
};
