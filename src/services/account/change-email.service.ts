import { BASE_URL_FE, JWT_SECRET } from "../../config";
import { transporter } from "../../lib/nodemailer";
import prisma from "../../lib/prisma";
import fs from "fs";
import { sign } from "jsonwebtoken";
import path from "path";
import Handlebars from "handlebars";

export const changeEmailService = async (userId: number, newEmail: string) => {
  // Validasi format email menggunakan regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newEmail)) {
    throw new Error("Format email tidak valid");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
      isDeleted: false, // Tambahkan pengecekan user yang aktif
    },
  });

  if (!user) throw new Error("User not found");

  // Cek email baru dengan case insensitive
  const existingUser = await prisma.user.findFirst({
    where: {
      email: { equals: newEmail, mode: "insensitive" },
      isDeleted: false,
    },
  });

  if (existingUser) throw new Error("Email already in use");

  // Set expiry time sebagai environment variable
  const VERIFY_TOKEN_EXPIRY = process.env.VERIFY_TOKEN_EXPIRY || "60m";

  const token = sign(
    {
      id: userId,
      email: newEmail,
      type: "email-change", // Tambahkan type untuk keamanan
    },
    JWT_SECRET as string,
    { expiresIn: VERIFY_TOKEN_EXPIRY }
  );

  // Update token di database
  await prisma.user.update({
    where: { id: userId },
    data: { token },
  });

  const link = `${BASE_URL_FE}/verify-email/${token}`;

  // Try-catch untuk handling email sending error
  try {
    const templatePath = path.resolve(
      __dirname,
      "../../../templates/change-email.hbs"
    );
    const templateSource = fs.readFileSync(templatePath, "utf8");
    const template = Handlebars.compile(templateSource);
    const htmlToSend = template({ name: user.name, link });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "Admin <admin@domain.com>",
      to: newEmail,
      subject: "Please verify your email",
      html: htmlToSend,
    });

    return {
      message: `Email verifikasi telah dikirim ke ${newEmail}`,
      expiresIn: VERIFY_TOKEN_EXPIRY,
    };
  } catch (error) {
    // Rollback token jika email gagal terkirim
    await prisma.user.update({
      where: { id: userId },
      data: { token: null },
    });
    throw new Error("Failed to send verification email");
  }
};
