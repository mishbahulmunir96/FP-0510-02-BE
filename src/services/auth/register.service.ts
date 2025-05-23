import prisma from "../../lib/prisma";
import { transporter } from "../../lib/nodemailer";
import jwt from "jsonwebtoken";
import { cloudinaryUpload } from "../../lib/cloudinary";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";

interface RegisterInput {
  email: string;
  role?: "USER" | "TENANT";
  name?: string;
  phoneNumber?: string;
  bankName?: string;
  bankNumber?: string;
}

export const registerService = async (
  data: RegisterInput,
  file?: Express.Multer.File
) => {
  const { email } = data;
  const role = data.role || "USER";

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  let imageUrl = "";
  if (file && role === "TENANT") {
    try {
      const result = await cloudinaryUpload(file);
      imageUrl = result.secure_url;
    } catch (uploadError) {
      throw new Error("Image upload failed");
    }
  }

  const defaultName = email.split("@")[0];

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
    const user = await prisma.$transaction(async (prisma) => {
      const newUser = await prisma.user.create({
        data: {
          name: role === "USER" ? defaultName : data.name!,
          email: email,
          token: verificationToken,
          role: role,
          isVerified: false,
        },
      });

      if (role === "TENANT") {
        if (
          !data.name ||
          !data.phoneNumber ||
          !data.bankName ||
          !data.bankNumber
        ) {
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

    const mainTemplatePath = path.join(
      __dirname,
      "../../templates/verifyEmail.hbs"
    );
    const mainTemplateSource = fs.readFileSync(mainTemplatePath, "utf8");
    const mainTemplate = handlebars.compile(mainTemplateSource);
    const replacements = {
      name: role === "USER" ? defaultName : data.name,
      verificationLink: `${process.env.BASE_URL_FE}/verify?token=${verificationToken}`,
      logoUrl:
        "https://res.cloudinary.com/andikalp/image/upload/v1738209868/qdx0l3jzw4fsqoag71dl.png",
      appName: "RateHaven",
      year: new Date().getFullYear(),
      appAddress: "RateHaven Address, Yogyakarta, Indonesia",
      expiryTime: "1 hour",
    };
    const emailHtml = mainTemplate(replacements);

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
