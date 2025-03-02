import { Prisma } from "../../../prisma/generated/client";
import { cloudinaryUpload } from "../../lib/cloudinary";
import prisma from "../../lib/prisma";

interface UpdatePropertyBody {
  title?: string;
  slug?: string;
  description?: string;
  latitude?: string;
  longitude?: string;
  propertyCategoryId?: string | number;
  location?: string;
  status?: "PUBLISHED" | "DRAFT";
}

interface ErrorResponse {
  code: string;
  message: string;
}

export const updatePropertyService = async (
  userId: number,
  propertyId: number,
  body: Partial<UpdatePropertyBody>,
  files?: Express.Multer.File[]
) => {
  try {
    // 1. Validasi user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        isDeleted: false,
      },
    });

    if (!user) {
      throw { code: "USER_NOT_FOUND", message: "User not found" };
    }

    if (user.role !== "TENANT") {
      throw { code: "UNAUTHORIZED", message: "User doesn't have access" };
    }

    // 2. Validasi tenant
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        isDeleted: false,
      },
    });

    if (!tenant) {
      throw { code: "TENANT_NOT_FOUND", message: "Tenant not found" };
    }

    // 3. Validasi property
    const currentProperty = await prisma.property.findFirst({
      where: {
        id: propertyId,
        tenantId: tenant.id,
        isDeleted: false,
      },
      include: {
        propertyImage: true,
        propertyCategory: true,
      },
    });

    if (!currentProperty) {
      throw { code: "PROPERTY_NOT_FOUND", message: "Property not found" };
    }

    // 4. Upload images if provided
    let imageResults: { secure_url: string }[] = [];
    if (files && files.length > 0) {
      try {
        imageResults = await Promise.all(
          files.map((file) => cloudinaryUpload(file))
        );
      } catch (error) {
        throw {
          code: "IMAGE_UPLOAD_FAILED",
          message: "Failed to upload images",
        };
      }
    }

    // 5. Prepare update data
    const updateData: Prisma.PropertyUpdateInput = {
      ...(body.title && { title: body.title }),
      ...(body.slug && { slug: body.slug }),
      ...(body.description && { description: body.description }),
      ...(body.latitude && { latitude: body.latitude }),
      ...(body.longitude && { longitude: body.longitude }),
      ...(body.location && { location: body.location }),
      ...(body.status && { status: body.status }),
      ...(body.propertyCategoryId && {
        propertyCategory: {
          connect: {
            id: Number(body.propertyCategoryId),
          },
        },
      }),
    };

    // 6. Lakukan transaksi update
    return await prisma.$transaction(async (tx) => {
      // Update property
      const updatedProperty = await tx.property.update({
        where: { id: propertyId },
        data: updateData,
        include: {
          propertyImage: true,
          propertyCategory: true,
          tenant: {
            select: {
              name: true,
              phoneNumber: true,
              bankName: true,
              bankNumber: true,
            },
          },
        },
      });

      // Handle image updates if new images provided
      if (files && files.length > 0 && imageResults.length > 0) {
        // If we're replacing all images, first delete existing ones
        if (currentProperty.propertyImage.length > 0) {
          await tx.propertyImage.deleteMany({
            where: { propertyId: propertyId },
          });
        }

        // Create new image records for each uploaded image
        await Promise.all(
          imageResults
            .filter((result) => result?.secure_url)
            .map((result) =>
              tx.propertyImage.create({
                data: {
                  imageUrl: result.secure_url,
                  propertyId: updatedProperty.id,
                  isDeleted: false,
                },
              })
            )
        );
      }

      // Get fresh data after all updates
      const finalProperty = await tx.property.findUnique({
        where: { id: propertyId },
        include: {
          propertyImage: true,
          propertyCategory: true,
          tenant: {
            select: {
              name: true,
              phoneNumber: true,
              bankName: true,
              bankNumber: true,
            },
          },
          room: {
            where: { isDeleted: false },
            include: {
              roomImage: true,
              roomFacility: true,
            },
          },
          propertyFacility: {
            where: { isDeleted: false },
          },
          review: {
            include: {
              user: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      return {
        message: "Update property success",
        data: finalProperty,
      };
    });
  } catch (error) {
    // Handle specific errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw { code: "DUPLICATE_SLUG", message: "Slug already exists" };
      }
      throw { code: "DATABASE_ERROR", message: error.message };
    }

    // Handle custom errors
    if ((error as ErrorResponse).code) {
      throw error;
    }

    // Handle unexpected errors
    throw { code: "INTERNAL_SERVER_ERROR", message: "Something went wrong" };
  }
};
