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
  propertyCategoryId: string | number; // Allow both string and number
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

    // Convert propertyCategoryId to number
    const categoryId = Number(propertyCategoryId);

    // Validate if conversion was successful
    if (isNaN(categoryId)) {
      throw new Error("Invalid property category ID");
    }

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

    // Validate property category exists (using the converted number)
    const categoryExists = await prisma.propertyCategory.findUnique({
      where: { id: categoryId },
    });
    if (!categoryExists) {
      throw new Error("Property category not found");
    }

    // Upload images if provided
    const imageResults =
      files && files.length > 0
        ? await Promise.all(files.map((file) => cloudinaryUpload(file)))
        : [];

    // Create property and images in a transaction
    const result = await prisma.$transaction(async (tx) => {
      const newProperty = await tx.property.create({
        data: {
          description,
          latitude,
          longitude,
          slug,
          title,
          propertyCategoryId: categoryId, // Use the converted number
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

      // Create property images
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
