import { transporter } from "../../lib/nodemailer";
import prisma from "../../lib/prisma";
import * as hbs from "handlebars";
import * as fs from "fs";
import * as path from "path";

export const approveTransactionByTenantService = async (
  paymentId: number,
  tenantId: number,
  isApproved: boolean
) => {
  try {
    const payment = await prisma.payment.findFirst({
      where: {
        id: paymentId,
        status: "WAITING_FOR_PAYMENT_CONFIRMATION",
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
      throw new Error("Transaction not found or not eligible for approval");
    }

    const updatedPayment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: isApproved ? "PROCESSED" : "WAITING_FOR_PAYMENT",
      },
    });

    const templatePath = path.join(
      __dirname,
      `../../templates/${
        isApproved ? "payment-approved" : "payment-rejected"
      }.hbs`
    );
    const template = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = hbs.compile(template);

    const emailData = {
      userName: payment.user.name,
      transactionId: payment.uuid,
      propertyName: payment.reservation[0].room.property.title,
      totalPrice: payment.totalPrice,
      checkInDate: payment.reservation[0].startDate,
      checkOutDate: payment.reservation[0].endDate,
      duration: payment.duration,
      reservationId: payment.reservation[0].uuid,
      paymentLink: `${process.env.FRONTEND_URL}/payment/${payment.uuid}`,
    };

    const emailHtml = compiledTemplate(emailData);

    await transporter.sendMail({
      to: payment.user.email,
      subject: isApproved ? "Payment Approved" : "Payment Rejected",
      html: emailHtml,
    });

    return updatedPayment;
  } catch (error) {
    throw error;
  }
};
