import prisma from "../../lib/prisma";
import { transporter } from "../../lib/nodemailer";
import jwt from "jsonwebtoken";
import path from "path";
import handlebars from "handlebars";
import fs from "fs";

export const changeEmailService = async (userId: number, newEmail: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newEmail)) {
    throw new Error("Invalid email format");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId, isDeleted: false },
  });

  if (!user) throw new Error("User not found");

  const existingUser = await prisma.user.findFirst({
    where: {
      email: { equals: newEmail, mode: "insensitive" },
      isDeleted: false,
    },
  });

  if (existingUser) throw new Error("Email already in use");

  const verificationToken = jwt.sign(
    {
      email: newEmail,
      createdAt: new Date().toISOString(),
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  try {
    // Load templates & partials
    const partialsDir = path.join(__dirname, "../../templates/partials");
    const partialFiles = fs.readdirSync(partialsDir);
    partialFiles.forEach((file) => {
      const matches = /^([^.]+).hbs$/.exec(file);
      if (!matches) return;
      const name = matches[1];
      const source = fs.readFileSync(path.join(partialsDir, file), "utf8");
      handlebars.registerPartial(name, source);
    });

    const templatePath = path.join(
      __dirname,
      "../../templates/verifyEmail.hbs"
    );
    const templateSource = fs.readFileSync(templatePath, "utf8");
    const template = handlebars.compile(templateSource);

    const emailHtml = template({
      name: user.name,
      verificationLink: `${process.env.BASE_URL_FE}/verify-email?token=${verificationToken}`,
      logoUrl: "your-logo-url",
      appName: "RateHaven",
      year: new Date().getFullYear(),
      appAddress: "Your App Address",
      expiryTime: "1 hour",
    });

    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: newEmail,
      subject: "Verify Your Email",
      html: emailHtml,
    });

    await prisma.user.update({
      where: { id: userId },
      data: { token: verificationToken },
    });

    return {
      message: "Verification email sent successfully",
      expiresIn: "1h",
    };
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Failed to send verification email");
  }
};
