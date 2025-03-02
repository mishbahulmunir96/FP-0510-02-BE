import { PropertyImage } from "../../../prisma/generated/client";
import { cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

export const updatePropertyImageService = async (
  imageId: number,
  file: Express.Multer.File,
  userId: number
): Promise<{ message: string; data: PropertyImage }> => {
  try {
    // Check if image exists
    const existingImage = await prisma.propertyImage.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
      include: {
        property: {
          include: {
            tenant: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!existingImage) {
      throw new Error("Property image not found");
    }

    // Verify user is the property owner
    if (existingImage.property.tenant.user.id !== userId) {
      throw new Error("You don't have permission to update this image");
    }

    // Upload new image to cloudinary
    const imageResult = await cloudinaryUpload(file);

    if (!imageResult || !imageResult.secure_url) {
      throw new Error("Failed to upload image");
    }

    // Update image record in database
    const updatedImage = await prisma.propertyImage.update({
      where: {
        id: imageId,
      },
      data: {
        imageUrl: imageResult.secure_url,
      },
    });

    return {
      message: "Property image updated successfully",
      data: updatedImage,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to update property image");
  }
};
