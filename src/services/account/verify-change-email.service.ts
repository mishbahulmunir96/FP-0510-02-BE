import fs from "fs";
import Handlebars from "handlebars";
import path from "path";
import prisma from "../../lib/prisma";
import { BASE_URL_FE } from "../../config";
import { transporter } from "../../lib/nodemailer";

export const verifyChangeEmailService = async (
  userId: number,
  email: string
) => {
  // Pastikan tidak ada user yang sudah terverifikasi dengan email tersebut
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser?.isVerified) {
    throw new Error("Email already in use or verified");
  }

  // Update user: set email baru & isVerified = true
  const verifyChangeEmailUser = await prisma.user.update({
    where: { id: userId },
    data: {
      isVerified: true,
      email,
    },
  });

  // Kirim email konfirmasi
  const link = `${BASE_URL_FE}/login`;
  const emailTemplatePath = path.join(
    __dirname,
    "../../../templates/verify-change-email-success.hbs"
  );

  const emailTemplateSource = fs.readFileSync(emailTemplatePath, "utf8");
  const template = Handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ newEmail: email, link });

  await transporter.sendMail({
    from: "Admin",
    to: email,
    subject: "Change Email Verification Successful",
    html: htmlToSend,
  });

  return {
    message: "Thank you! Your new email has been verified",
    data: verifyChangeEmailUser,
  };
};
