import prisma from "../../lib/prisma";
import { StatusPayment } from "../../../prisma/generated/client";
import schedule from "node-schedule";

export const initializeAutoCheckInOut = () => {
  schedule.scheduleJob("0 * * * *", async () => {
    try {
      await autoCheckIn();
      await autoCheckOut();
    } catch (error) {
      console.error("Auto check-in/out error:", error);
    }
  });
};

const autoCheckIn = async () => {
  const currentDate = new Date();

  // Hanya jalankan jika waktu sudah lewat jam 14:00
  if (currentDate.getHours() < 14) {
    return;
  }

  try {
    const result = await prisma.payment.updateMany({
      where: {
        status: StatusPayment.PROCESSED,
        reservation: {
          some: {
            startDate: {
              lte: currentDate,
              gte: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate(),
                14, // 14:00
                0,
                0
              ),
            },
          },
        },
      },
      data: {
        status: StatusPayment.CHECKED_IN,
      },
    });

    if (result.count > 0) {
      console.log(`${result.count} reservations automatically checked in`);
    }
  } catch (error) {
    console.error("Error in autoCheckIn:", error);
  }
};

const autoCheckOut = async () => {
  const currentDate = new Date();

  // Hanya jalankan jika waktu sudah lewat jam 12:00
  if (currentDate.getHours() < 12) {
    return;
  }

  try {
    // Set waktu checkout ke jam 12:00 hari ini
    const checkoutTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      12, // 12:00
      0,
      0
    );

    const result = await prisma.payment.updateMany({
      where: {
        status: StatusPayment.CHECKED_IN,
        reservation: {
          some: {
            endDate: {
              // Cek apakah endDate adalah hari ini dan sudah lewat jam 12
              lte: currentDate,
              gte: checkoutTime,
            },
          },
        },
      },
      data: {
        status: StatusPayment.CHECKED_OUT,
      },
    });

    if (result.count > 0) {
      console.log(
        `${result.count} reservations automatically checked out at ${currentDate}`
      );
    }
  } catch (error) {
    console.error("Error in autoCheckOut:", error);
  }
};

// Export untuk keperluan testing
export const checkInOutService = {
  autoCheckIn,
  autoCheckOut,
};
