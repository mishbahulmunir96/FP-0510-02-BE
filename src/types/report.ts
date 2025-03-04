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
