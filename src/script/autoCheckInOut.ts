import schedule from "node-schedule";
import prisma from "../lib/prisma";
import { StatusPayment } from "../../prisma/generated/client";

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
                14,
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

  if (currentDate.getHours() < 12) {
    return;
  }

  try {
    const checkoutTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      12,
      0,
      0
    );

    const result = await prisma.payment.updateMany({
      where: {
        status: StatusPayment.CHECKED_IN,
        reservation: {
          some: {
            endDate: {
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
