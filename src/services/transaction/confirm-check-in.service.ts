import { transporter } from "../../lib/nodemailer";
import prisma from "../../lib/prisma";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";
import { StatusPayment } from "../../../prisma/generated/client";

export const confirmCheckInService = async (
  paymentId: number,
  tenantId: number
) => {
  try {
    const payment = await prisma.payment.findFirst({
      where: {
        id: paymentId,
        status: "PROCESSED",
        reservation: {
          some: {
            room: {
              property: {
                tenantId,
              },
            },
          },
        },
      },
      include: {
        user: true,
        reservation: {
          include: {
            room: {
              include: {
                property: true,
              },
            },
          },
        },
      },
    });

    if (!payment) {
      throw new Error("Payment not found or not eligible for check-in");
    }

    const checkInTime = new Date(payment.reservation[0].startDate);
    checkInTime.setUTCHours(7, 0, 0, 0);
    const now = new Date();

    if (now < checkInTime) {
      throw new Error(
        "Check-in time has not started yet (starts at 14:00 WIB)"
      );
    }

    const updatedPayment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: StatusPayment.CHECKED_IN,
      },
    });

    const templatePath = path.join(
      __dirname,
      "../../templates/check-in-confirmed.hbs"
    );
    const template = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = hbs.compile(template);

    const emailData = {
      userName: payment.user.name,
      propertyName: payment.reservation[0].room.property.title,
      checkInDate: payment.reservation[0].startDate,
      checkOutDate: payment.reservation[0].endDate,
      roomName: payment.reservation[0].room.name,
    };

    const emailHtml = compiledTemplate(emailData);

    await transporter.sendMail({
      to: payment.user.email,
      subject: "Check-in Confirmed",
      html: emailHtml,
    });

    return updatedPayment;
  } catch (error) {
    throw error;
  }
};
