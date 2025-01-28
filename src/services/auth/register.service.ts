import prisma from "../../lib/prisma";
import { transporter } from "../../lib/nodemailer";
import jwt from "jsonwebtoken";
import { cloudinaryUpload } from "../../lib/cloudinary";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

interface RegisterInput {
  email: string;
  role: "USER" | "TENANT";
  name: string;
  phoneNumber?: string;
  bankName?: string;
  bankNumber?: string;
}

export const registerService = async (
  data: RegisterInput,
  file?: Express.Multer.File
) => {
  const { email, role, name } = data;

  // Cek apakah email sudah terdaftar
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Upload gambar jika ada
  let imageUrl = "";
  if (file) {
    try {
      const result = await cloudinaryUpload(file);
      imageUrl = result.secure_url;
    } catch (uploadError) {
      throw new Error("Image upload failed");
    }
  }

  // Buat token verifikasi email dengan expiry 1 jam
  const verificationToken = jwt.sign(
    {
      email,
      createdAt: new Date().toISOString(),
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
    }
  );

  try {
    // Buat User dan Tenant (jika diperlukan) dalam transaksi
    const user = await prisma.$transaction(async (prisma) => {
      const newUser = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          imageUrl,
          token: verificationToken,
          role: role,
          isVerified: false, // Memastikan user belum terverifikasi
        },
      });

      if (role === "TENANT") {
        if (!data.phoneNumber || !data.bankName || !data.bankNumber) {
          throw new Error("Tenant data incomplete");
        }

        await prisma.tenant.create({
          data: {
            name: data.name,
            phoneNumber: data.phoneNumber,
            bankName: data.bankName,
            bankNumber: data.bankNumber,
            imageUrl,
            userId: newUser.id,
          },
        });
      }

      return newUser;
    });

    // Load dan register partials
    const partialsDir = path.join(__dirname, "../../templates/partials");
    const partialFiles = fs.readdirSync(partialsDir);
    partialFiles.forEach((file) => {
      const matches = /^([^.]+).hbs$/.exec(file);
      if (!matches) return;
      const name = matches[1];
      const filepath = path.join(partialsDir, file);
      const source = fs.readFileSync(filepath, "utf8");
      handlebars.registerPartial(name, source);
    });

    // Load dan compile template utama
    const mainTemplatePath = path.join(
      __dirname,
      "../../templates/verifyEmail.hbs"
    );
    const mainTemplateSource = fs.readFileSync(mainTemplatePath, "utf8");
    const mainTemplate = handlebars.compile(mainTemplateSource);

    // Data untuk template
    const replacements = {
      name: data.name,
      verificationLink: `${process.env.BASE_URL_FE}/verify?token=${verificationToken}`,
      logoUrl: process.env.LOGO_URL,
      appName: process.env.APP_NAME || "RateHaven",
      year: new Date().getFullYear(),
      appAddress:
        process.env.APP_ADDRESS || "RateHaven Address, Yogyakarta, Indonesia",
      expiryTime: "1 hour",
    };

    // Render HTML email
    const emailHtml = mainTemplate(replacements);

    // Kirim email verifikasi
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "Verify Your Email",
      html: emailHtml,
    });

    return {
      message: "Registration successful, please check your email",
      userId: user.id,
    };
  } catch (error: any) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};
