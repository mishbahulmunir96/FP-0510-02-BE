import schedule from "node-schedule";
import prisma from "../lib/prisma";
import { transporter } from "../lib/nodemailer";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { StatusPayment } from "../../prisma/generated/client";

export const initializeCheckInReminder = () => {
  schedule.scheduleJob("0 14 * * *", async () => {
    try {
      await sendCheckInReminders();
    } catch (error) {
      console.error("Check-in reminder error:", error);
    }
  });
};

const sendCheckInReminders = async () => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(14, 0, 0, 0);

    const reservations = await prisma.reservation.findMany({
      where: {
        startDate: tomorrow,
        payment: {
          status: StatusPayment.PROCESSED,
        },
      },
      include: {
        room: {
          include: {
            property: {
              include: {
                propertyFacility: true,
              },
            },
          },
        },
        payment: {
          include: {
            user: true,
          },
        },
      },
    });

    console.log(
      `Found ${reservations.length} reservations for tomorrow's check-in`
    );

    const templatePath = path.join(
      __dirname,
      "../templates/check-in-reminder.hbs"
    );
    const template = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = hbs.compile(template);

    for (const reservation of reservations) {
      try {
        const startDate = new Date(reservation.startDate);
        const endDate = new Date(reservation.endDate);
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const facilities = reservation.room.property.propertyFacility.map(
          (facility) => facility.title
        );

        const emailData = {
          userName: reservation.payment.user.name,
          propertyName: reservation.room.property.title,
          roomType: reservation.room.type,
          checkInDate: startDate.toLocaleDateString(),
          checkOutDate: endDate.toLocaleDateString(),
          duration: diffDays,
          totalPrice: reservation.payment.totalPrice.toLocaleString(),
          reservationId: reservation.payment.uuid,
          propertyAddress: reservation.room.property.location,
          propertyLandmark: reservation.room.property.location,
          propertyContact: "Contact number",
          facilities: facilities,
        };

        await transporter.sendMail({
          to: reservation.payment.user.email,
          subject: "Reminder: Your Check-in Tomorrow",
          html: compiledTemplate(emailData),
        });

        console.log(`Reminder sent for reservation: ${reservation.id}`);
      } catch (error) {
        console.error(
          `Failed to send reminder for reservation ${reservation.id}:`,
          error
        );
      }
    }
  } catch (error) {
    console.error("Error in sendCheckInReminders:", error);
    throw error;
  }
};
