import prisma from "../../lib/prisma";
import {
  TransactionMetric,
  TransactionMetricsParams,
} from "../../types/report";
import { normalizeToUTC, groupDataByPeriod } from "../../utils/dateUtils";

export const getTransactionMetricsService = async ({
  propertyIds,
  startDate,
  endDate,
}: TransactionMetricsParams): Promise<TransactionMetric> => {
  const utcStartDate = normalizeToUTC(startDate);
  const utcEndDate = normalizeToUTC(endDate);

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
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
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
    const bookingDate = normalizeToUTC(new Date(reservation.payment.createdAt));
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
    totalTransactions,
    totalRevenue,
    averageTransactionValue,
    paymentMethodDistribution: paymentMethods,
    paymentStatusBreakdown,
    peakBookingPeriods,
    averageBookingDuration,
    averageBookingLeadTime,
  };
};
