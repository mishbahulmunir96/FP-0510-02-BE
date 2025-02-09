import { Payment, Reservation } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";
import { UserReport } from "../../types/report";

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
  limit = 10, // Default limit for top users
}: GetUserReportParams): Promise<UserReport> => {
  try {
    // Get all payments for tenant's properties with user data
    const payments = (await prisma.payment.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
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
                  gte: startDate,
                  lte: endDate,
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

    // Calculate repeat customers
    const repeatCustomers = Object.values(userBookings)
      .filter((user: UserBookingDetails) => user.bookings.length > 1)
      .map((user: UserBookingDetails) => ({
        userId: user.userId,
        name: user.name,
        totalBookings: user.bookings.length,
      }));
    // Calculate top spenders
    const topSpenders = Object.values(userBookings)
      .map((user: UserBookingDetails) => ({
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
    // Calculate booking patterns
    const bookingPatterns = Object.values(userBookings).map(
      (user: UserBookingDetails) => {
        const userPayments = user.bookings;
        const totalBookings = userPayments.length;

        // Calculate average stay duration
        const stayDurations = userPayments.flatMap(
          (payment: PaymentWithDetails) =>
            payment.reservation.map((res: Reservation) => {
              const start = new Date(res.startDate);
              const end = new Date(res.endDate);
              return Math.ceil(
                (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
              );
            })
        );
        const averageStayDuration =
          stayDurations.length > 0
            ? Number(
                (
                  stayDurations.reduce(
                    (sum: number, duration: number) => sum + duration,
                    0
                  ) / stayDurations.length
                ).toFixed(2)
              )
            : 0;

        // Calculate preferred payment method
        const paymentMethods = userPayments.reduce(
          (acc: Record<string, number>, payment: Payment) => {
            acc[payment.paymentMethode] =
              (acc[payment.paymentMethode] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>
        );

        const preferredPaymentMethod = Object.entries(paymentMethods).sort(
          (a, b) => b[1] - a[1]
        )[0][0];

        // Calculate cancellations
        const totalCancellations = userPayments.filter(
          (payment: Payment) => payment.status === "CANCELLED"
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
      }
    );

    // Calculate average spending per user
    const totalSpending = payments.reduce(
      (sum, payment) => sum + payment.totalPrice,
      0
    );
    const averageSpendingPerUser =
      totalUniqueUsers > 0
        ? Number((totalSpending / totalUniqueUsers).toFixed(2))
        : 0;

    // Calculate rating distribution
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
        percentage: Number(((count / allRatings.length) * 100).toFixed(2)),
      })
    );

    return {
      totalUniqueUsers,
      repeatCustomers: {
        count: repeatCustomers.length,
        percentage: Number(
          ((repeatCustomers.length / totalUniqueUsers) * 100).toFixed(2)
        ),
        users: repeatCustomers,
      },
      topSpenders,
      bookingPatterns,
      averageSpendingPerUser,
      ratingDistribution,
    };
  } catch (error) {
    throw error;
  }
};
