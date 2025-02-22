export interface GetCalendarReportParams {
  tenantId: number;
  propertyId: number;
  month: number;
  year: number;
}

export interface RoomCalendarData {
  roomId: number;
  roomType: string;
  roomName: string | null;
  basePrice: number;
  stock: number;
  bookedCount: number;
  availableCount: number;
  peakSeasonRate:
    | {
        date: string;
        price: number;
      }[]
    | null;
}

export interface CalendarReport {
  propertyId: number;
  propertyName: string;
  totalRooms: number;
  rooms: RoomCalendarData[];
  dailyStats: {
    date: string;
    totalBooked: number;
    totalAvailable: number;
    occupancyRate: number;
  }[];
}
