import prisma from "../../lib/prisma";
import { transporter } from "../../lib/nodemailer";
import jwt from "jsonwebtoken";
import { cloudinaryUpload } from "../../lib/cloudinary";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export const registerService = async (
  data: any,
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

  // Buat token verifikasi email
  const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  // Buat User dan Tenant (jika diperlukan) dalam transaksi
  const user = await prisma.$transaction(async (prisma) => {
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        imageUrl,
        token: verificationToken,
        role: role, // Menetapkan role sesuai data
      },
    });

    if (role === "TENANT") {
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
    logoUrl:
      "https://res.cloudinary.com/andikalp/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1737980597/Biru_Hitam_Ilustrasi_Icon_Elegan_Properti_Logo_cqccfa.png",
    appName: "RateHaven",
    year: new Date().getFullYear(),
    appAddress: "RateHaven Address, Yogyakarta, Indonesia",
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

  return { message: "Registration successful, please check your email" };
};
