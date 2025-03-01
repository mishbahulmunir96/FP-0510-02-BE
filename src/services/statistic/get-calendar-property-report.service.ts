import { StatusPayment } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

interface CalendarReportQuery {
  propertyId: number;
  tenantId: number;
  startDate: Date;
  endDate: Date;
  roomId?: number;
}

export const getPropertyCalendarReportService = async (
  query: CalendarReportQuery
) => {
  try {
    const { propertyId, tenantId, startDate, endDate, roomId } = query;

    const property = await prisma.property.findFirst({
      where: {
        id: propertyId,
        tenantId,
        isDeleted: false,
      },
      select: {
        id: true,
        title: true,
        room: {
          where: {
            isDeleted: false,
            ...(roomId && { id: roomId }),
          },
          select: {
            id: true,
            name: true,
            type: true,
            stock: true,
            price: true,
          },
        },
      },
    });

    if (!property) {
      throw new Error("Property not found");
    }

    // Get all dates in range
    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Get all reservations in date range
    const reservations = await prisma.reservation.findMany({
      where: {
        room: {
          propertyId,
          isDeleted: false,
          ...(roomId && { id: roomId }),
        },
        startDate: { lte: endDate },
        endDate: { gte: startDate },
        payment: {
          status: {
            in: [
              StatusPayment.WAITING_FOR_PAYMENT,
              StatusPayment.WAITING_FOR_PAYMENT_CONFIRMATION,
              StatusPayment.PROCESSED,
              StatusPayment.CHECKED_IN,
            ],
          },
        },
      },
      select: {
        startDate: true,
        endDate: true,
        roomId: true,
      },
    });

    // Get non-availability periods
    const nonAvailabilityPeriods = await prisma.roomNonAvailability.findMany({
      where: {
        room: {
          propertyId,
          isDeleted: false,
          ...(roomId && { id: roomId }),
        },
        isDeleted: false,
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      select: {
        startDate: true,
        endDate: true,
        roomId: true,
      },
    });

    // Get peak season rates
    const peakSeasonRates = await prisma.peakSeasonRate.findMany({
      where: {
        room: {
          propertyId,
          isDeleted: false,
          ...(roomId && { id: roomId }),
        },
        isDeleted: false,
        startDate: { lte: endDate },
        endDate: { gte: startDate },
      },
      select: {
        startDate: true,
        endDate: true,
        roomId: true,
        price: true,
      },
    });

    // Process calendar data
    const calendarData = dates.map((date) => {
      const roomsStatus = property.room.map((room) => {
        // Check bookings for this date and room
        const bookedRooms = reservations.filter(
          (reservation) =>
            reservation.roomId === room.id &&
            date >= reservation.startDate &&
            date <= reservation.endDate
        ).length;

        // Check if room is non-available
        const isNonAvailable = nonAvailabilityPeriods.some(
          (period) =>
            period.roomId === room.id &&
            date >= period.startDate &&
            date <= period.endDate
        );

        // Check if peak season
        const peakRate = peakSeasonRates.find(
          (rate) =>
            rate.roomId === room.id &&
            date >= rate.startDate &&
            date <= rate.endDate
        );

        const availableRooms = isNonAvailable ? 0 : room.stock - bookedRooms;
        const occupancyRate = ((bookedRooms / room.stock) * 100).toFixed(1);

        return {
          roomId: room.id,
          roomName: room.name || `${room.type} Room`,
          roomType: room.type,
          totalRooms: room.stock,
          bookedRooms,
          availableRooms,
          occupancyRate: parseFloat(occupancyRate),
          isNonAvailable,
          isPeakSeason: !!peakRate,
          price: peakRate?.price || room.price,
        };
      });

      const totalRooms = roomsStatus.reduce(
        (sum, room) => sum + room.totalRooms,
        0
      );
      const totalBookedRooms = roomsStatus.reduce(
        (sum, room) => sum + room.bookedRooms,
        0
      );
      const totalAvailableRooms = roomsStatus.reduce(
        (sum, room) => sum + room.availableRooms,
        0
      );
      const occupancyRate =
        totalRooms > 0
          ? parseFloat(((totalBookedRooms / totalRooms) * 100).toFixed(1))
          : 0;

      return {
        date: date.toISOString().split("T")[0],
        totalRooms,
        totalBookedRooms,
        totalAvailableRooms,
        occupancyRate,
        rooms: roomsStatus,
      };
    });

    return {
      propertyId: property.id,
      propertyName: property.title,
      calendarData,
    };
  } catch (error) {
    throw error;
  }
};
