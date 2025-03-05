import {
  Property,
  Role,
  StatusProperty,
} from "../../../prisma/generated/client";
import { cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface CreatePropertyBody {
  title: string;
  slug: string;
  description: string;
  latitude: string;
  longitude: string;
  propertyCategoryId: string | number;
  location: string;
}

interface CreatePropertyResponse {
  message: string;
  data: Property;
}

export const createPropertyService = async (
  body: CreatePropertyBody,
  files: Express.Multer.File[],
  userId: number
): Promise<CreatePropertyResponse> => {
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
    const categoryId = Number(propertyCategoryId);
    if (isNaN(categoryId)) {
      throw new Error("Invalid property category ID");
    }
    const existingProperty = await prisma.property.findUnique({
      where: { slug },
    });
    if (existingProperty) {
      throw new Error("Slug already exists");
    }
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        isDeleted: false,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.role !== Role.TENANT) {
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
    const categoryExists = await prisma.propertyCategory.findUnique({
      where: { id: categoryId },
    });
    if (!categoryExists) {
      throw new Error("Property category not found");
    }

    const imageResults =
      files && files.length > 0
        ? await Promise.all(files.map((file) => cloudinaryUpload(file)))
        : [];

    const result = await prisma.$transaction(async (tx) => {
      const newProperty = await tx.property.create({
        data: {
          description,
          latitude,
          longitude,
          slug,
          title,
          propertyCategoryId: categoryId,
          location,
          status: StatusProperty.PUBLISHED,
          tenantId: tenant.id,
          isDeleted: false,
        },
        include: {
          propertyImage: true,
          propertyCategory: true,
          tenant: true,
        },
      });

      if (imageResults.length > 0) {
        await Promise.all(
          imageResults
            .filter((result) => result?.secure_url)
            .map((result) =>
              tx.propertyImage.create({
                data: {
                  imageUrl: result.secure_url,
                  propertyId: newProperty.id,
                  isDeleted: false,
                },
              })
            )
        );
      }

      return newProperty;
    });

    return {
      message: "Property created successfully",
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create property");
  }
};
