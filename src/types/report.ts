import { Payment, Reservation } from "../../prisma/generated/client";

export interface PropertyReport {
  propertyId: number;
  propertyName: string;
  totalRevenue: number;
  totalTransactions: number;
  occupancyRate: number;
  averageRating: number;
  roomDetails: {
    roomId: number;
    roomType: string;
    totalBookings: number;
    totalRevenue: number;
    averageStayDuration: number;
  }[];
  bestPerformingRooms: {
    roomId: number;
    roomType: string;
    totalBookings: number;
  }[];
}

export interface TransactionReport {
  totalTransactions: number;
  totalRevenue: number;
  averageTransactionValue: number;
  paymentMethodDistribution: {
    MANUAL: {
      count: number;
      percentage: number;
    };
    OTOMATIS: {
      count: number;
      percentage: number;
    };
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
  }[];
  averageBookingDuration: number;
  averageBookingLeadTime: number;
}

export interface UserReport {
  totalUniqueUsers: number;
  repeatCustomers: {
    count: number;
    percentage: number;
    users: {
      userId: number;
      name: string;
      totalBookings: number;
    }[];
  };
  topSpenders: {
    userId: number;
    name: string;
    totalSpent: number;
    totalBookings: number;
    averageSpending: number;
  }[];
  bookingPatterns: {
    userId: number;
    name: string;
    bookings: {
      totalBookings: number;
      averageStayDuration: number;
      preferredPaymentMethod: string;
      totalCancellations: number;
    };
  }[];
  averageSpendingPerUser: number;
  ratingDistribution: {
    rating: number;
    count: number;
    percentage: number;
  }[];
}
