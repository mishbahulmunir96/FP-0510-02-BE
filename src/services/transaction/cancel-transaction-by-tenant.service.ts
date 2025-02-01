import { transporter } from "../../lib/nodemailer";
import prisma from "../../lib/prisma";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";

export const cancelTransactionByTenantService = async (
  paymentId: number,
  tenantId: number
) => {
  const payment = await prisma.payment.findFirst({
    where: {
      id: paymentId,
      status: "WAITING_FOR_PAYMENT",
      paymentProof: null,
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
    throw new Error("Transaction not found or cannot be cancelled");
  }

  // Update status to cancelled
  const cancelledPayment = await prisma.payment.update({
    where: { id: paymentId },
    data: { status: "CANCELLED" },
  });

  // Send email notification
  const templatePath = path.join(
    __dirname,
    "../../templates/payment-cancelled.hbs"
  );
  const template = fs.readFileSync(templatePath, "utf8");
  const compiledTemplate = hbs.compile(template);

  const emailData = {
    userName: payment.user.name,
    propertyName: payment.reservation[0].room.property.title,
    transactionId: payment.uuid,
    totalPrice: payment.totalPrice,
  };

  await transporter.sendMail({
    to: payment.user.email,
    subject: "Booking Cancelled by Property Owner",
    html: compiledTemplate(emailData),
  });

  return cancelledPayment;
};
