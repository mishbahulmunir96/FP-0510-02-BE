import { PropertyImage } from "../../../prisma/generated/client";
import prisma from "../../lib/prisma";

export const getPropertyImagesService = async (
  propertyId: number
): Promise<{ message: string; data: PropertyImage[] }> => {
  try {
    // Check if property exists
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
        isDeleted: false,
      },
    });

    if (!property) {
      throw new Error("Property not found");
    }

    // Get all non-deleted images for the property
    const images = await prisma.propertyImage.findMany({
      where: {
        propertyId,
        isDeleted: false,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      message: "Property images retrieved successfully",
      data: images,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to get property images");
  }
};

export const getPropertyImageByIdService = async (
  imageId: number
): Promise<{ message: string; data: PropertyImage | null }> => {
  try {
    const image = await prisma.propertyImage.findUnique({
      where: {
        id: imageId,
        isDeleted: false,
      },
      include: {
        property: true,
      },
    });

    return {
      message: image ? "Property image found" : "Property image not found",
      data: image,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to get property image");
  }
};
