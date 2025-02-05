import { cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface CreatePropertyBody {
  title: string;
  slug: string;
  description: string;
  latitude: string;
  longitude: string;
  propertyCategoryId: number; // Sesuai dengan schema, gunakan ID kategori properti
  location: string; // Required di schema
}

export const createPropertyService = async (
  body: CreatePropertyBody,
  file: Express.Multer.File,
  userId: number
) => {
  try {
    const {
      description,
      latitude,
      longitude,
      slug,
      title,
      propertyCategoryId,
      location,
    } = body;

    // Check if slug exists
    const existingProperty = await prisma.property.findUnique({
      where: { slug },
    });
    if (existingProperty) {
      throw new Error("Slug already exists");
    }

    // Validate user and tenant
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        isDeleted: false,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== "TENANT") {
      throw new Error("User doesn't have permission to create properties");
    }

    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        isDeleted: false,
      },
    });
    if (!tenant) {
      throw new Error("Tenant profile not found");
    }

    // Upload image if provided
    const imageResult = file ? await cloudinaryUpload(file) : null;

    // Create property and image in a transaction
    return await prisma.$transaction(async (tx) => {
      const newProperty = await tx.property.create({
        data: {
          description,
          latitude,
          longitude,
          slug,
          title,
          // Menggunakan propertyCategoryId sesuai schema
          propertyCategoryId,
          location,
          status: "PUBLISHED",
          tenant: {
            connect: { id: tenant.id },
          },
        },
      });

      if (imageResult?.secure_url) {
        await tx.propertyImage.create({
          data: {
            imageUrl: imageResult.secure_url,
            propertyId: newProperty.id,
          },
        });
      }

      return {
        message: "Property created successfully",
        data: newProperty,
      };
    });
  } catch (error) {
    throw error;
  }
};
