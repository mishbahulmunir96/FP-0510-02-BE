import { hashPassword } from "../../lib/argon";
import prisma from "../../lib/prisma";
import { RegisterInput } from "../../types/register";
import { cloudinaryUpload } from "../../lib/cloudinary";

export const registerService = async (
  body: RegisterInput,
  file?: Express.Multer.File
) => {
  const {
    name,
    email,
    password,
    role = "USER",
    bankName,
    bankNumber,
    phoneNumber,
  } = body;

  try {
    const result = await prisma.$transaction(async (prisma) => {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("Email already exists!");
      }

      let imageUrl = "";
      if (file) {
        const uploadResult = await cloudinaryUpload(file);
        imageUrl = uploadResult.secure_url;
      }

      const hashedPassword = await hashPassword(password);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          imageUrl,
          token: "",
          role,
          provider: "CREDENTIAL",
          isVerified: false,
          isDeleted: false,
        },
      });

      let newTenant = null;
      if (role === "TENANT") {
        if (!bankName || !bankNumber || !phoneNumber) {
          throw new Error("Incomplete tenant data!");
        }

        newTenant = await prisma.tenant.create({
          data: {
            name,
            bankName,
            bankNumber,
            phoneNumber,
            imageUrl,
            userId: newUser.id,
          },
        });
      }

      return { user: newUser, tenant: newTenant };
    });

    return result;
  } catch (error) {
    throw error;
  }
};
