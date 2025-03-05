export interface CalendarEntry {
  date: Date;
  price: number;
  isPeakSeason: boolean;
  isAvailable: boolean;
  availableStock: number;
  totalStock: number;
}

export interface CalendarData {
  [key: string]: CalendarEntry;
}

export interface RoomPriceComparison {
  roomId: number;
  name: string | null;
  type: string;
  propertyId: number;
  basePrice: number;
  averagePrice: number;
  minimumPrice: number;
  maximumPrice: number;
  dailyPrices: { [key: string]: number };
}
