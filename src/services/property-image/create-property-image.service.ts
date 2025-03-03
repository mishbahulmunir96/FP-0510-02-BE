import { Prisma, PropertyImage } from "../../../prisma/generated/client";
import { cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

export const createPropertyImageService = async (
  propertyId: number,
  file: Express.Multer.File,
  userId: number
): Promise<{ message: string; data: PropertyImage }> => {
  try {
    // Check if property exists and user has permission
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
        isDeleted: false,
      },
      include: {
        tenant: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!property) {
      throw new Error("Property not found");
    }

    // Verify user is the property owner
    if (property.tenant.user.id !== userId) {
      throw new Error(
        "You don't have permission to add images to this property"
      );
    }

    // Upload image to cloudinary
    const imageResult = await cloudinaryUpload(file);

    if (!imageResult || !imageResult.secure_url) {
      throw new Error("Failed to upload image");
    }

    // Create image record in database
    const newImage = await prisma.propertyImage.create({
      data: {
        imageUrl: imageResult.secure_url,
        propertyId,
        isDeleted: false,
      },
    });

    return {
      message: "Property image created successfully",
      data: newImage,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create property image");
  }
};

export const createMultiplePropertyImagesService = async (
  propertyId: number,
  files: Express.Multer.File[],
  userId: number
): Promise<{ message: string; data: PropertyImage[] }> => {
  try {
    // Check if property exists and user has permission
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
        isDeleted: false,
      },
      include: {
        tenant: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!property) {
      throw new Error("Property not found");
    }

    // Verify user is the property owner
    if (property.tenant.user.id !== userId) {
      throw new Error(
        "You don't have permission to add images to this property"
      );
    }

    // Upload all images to cloudinary
    const uploadPromises = files.map((file) => cloudinaryUpload(file));
    const uploadResults = await Promise.all(uploadPromises);

    // Filter out failed uploads
    const successfulUploads = uploadResults.filter(
      (result) => result && result.secure_url
    );

    if (successfulUploads.length === 0) {
      throw new Error("Failed to upload any images");
    }

    // Create image records in database
    const imageCreatePromises = successfulUploads.map((result) =>
      prisma.propertyImage.create({
        data: {
          imageUrl: result.secure_url,
          propertyId,
          isDeleted: false,
        },
      })
    );

    const createdImages = await prisma.$transaction(imageCreatePromises);

    return {
      message: `${createdImages.length} property images created successfully`,
      data: createdImages,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create property images");
  }
};
