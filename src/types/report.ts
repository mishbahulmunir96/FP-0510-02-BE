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

export interface TransactionMetricsParams {
  propertyIds: number[];
  startDate: Date;
  endDate: Date;
}

export interface PaymentMethodDistribution {
  MANUAL: { count: number; percentage: number };
  OTOMATIS: { count: number; percentage: number };
}

export interface PaymentStatusBreakdown {
  successRate: number;
  cancellationRate: number;
  pendingRate: number;
  totalSuccessful: number;
  totalCancelled: number;
  totalPending: number;
}

export interface PeakBookingPeriod {
  date: string;
  totalBookings: number;
  totalRevenue: number;
}

export interface TransactionMetric {
  totalTransactions: number;
  totalRevenue: number;
  averageTransactionValue: number;
  paymentMethodDistribution: PaymentMethodDistribution;
  paymentStatusBreakdown: PaymentStatusBreakdown;
  peakBookingPeriods: PeakBookingPeriod[];
  averageBookingDuration: number;
  averageBookingLeadTime: number;
}
