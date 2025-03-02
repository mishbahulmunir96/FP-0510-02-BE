import prisma from "../../lib/prisma";

export const deletePropertyImageService = async (
  imageId: number,
  userId: number
): Promise<{ message: string }> => {
  try {
    // Check if image exists
    const image = await prisma.propertyImage.findUnique({
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

    if (!image) {
      throw new Error("Property image not found");
    }

    // Verify user is the property owner
    if (image.property.tenant.user.id !== userId) {
      throw new Error("You don't have permission to delete this image");
    }

    // Soft delete the image
    await prisma.propertyImage.update({
      where: {
        id: imageId,
      },
      data: {
        isDeleted: true,
      },
    });

    return {
      message: "Property image deleted successfully",
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to delete property image");
  }
};
