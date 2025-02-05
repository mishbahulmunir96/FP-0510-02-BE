import { cloudinaryUpload } from "../../lib/cloudinary";
import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";

// UpdatePropertyBody menggunakan field sesuai dengan schema properti
interface UpdatePropertyBody {
  title: string;
  slug: string;
  description: string;
  latitude: string;
  longitude: string;
  propertyCategoryId: number; // Gunakan ID kategori properti (number)
}

export const updatePropertyService = async (
  userId: number,
  propertyId: number,
  body: Partial<UpdatePropertyBody>,
  file?: Express.Multer.File
) => {
  try {
    const {
      description,
      latitude,
      longitude,
      slug,
      title,
      propertyCategoryId,
    } = body;

    // Validasi user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have access");
    }

    // Cari tenant berdasarkan user
    const tenant = await prisma.tenant.findFirst({
      where: { userId: user.id, isDeleted: false },
    });
    if (!tenant) {
      throw new Error("Tenant not found");
    }

    // Cari properti yang dimiliki tenant
    const currentProperty = await prisma.property.findFirst({
      where: { id: propertyId, tenantId: tenant.id },
      include: { propertyImage: true },
    });
    if (!currentProperty) {
      throw new Error("Property not found");
    }

    let secureUrl: string | undefined;
    if (file) {
      const { secure_url } = await cloudinaryUpload(file);
      secureUrl = secure_url;
    }

    // Lakukan transaksi untuk update properti dan (opsional) update property image
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update data properti
      const updatedProperty = await tx.property.update({
        where: { id: propertyId },
        data: {
          description,
          latitude,
          longitude,
          slug,
          title,
          propertyCategoryId,
        },
      });

      // Jika file diunggah, update atau buat record gambar properti
      if (file && secureUrl) {
        if (currentProperty.propertyImage.length > 0) {
          // Update gambar properti pertama yang ada
          await tx.propertyImage.update({
            where: { id: currentProperty.propertyImage[0].id },
            data: {
              imageUrl: secureUrl,
            },
          });
        } else {
          // Buat record propertyImage baru jika belum ada gambar
          await tx.propertyImage.create({
            data: {
              imageUrl: secureUrl,
              propertyId: updatedProperty.id,
            },
          });
        }
      }

      return {
        message: "Update property success",
        data: updatedProperty,
      };
    });
  } catch (error) {
    throw error;
  }
};
