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
    const tenant = await prisma.tenant.findFirst({
      where: {
        userId: user.id,
        isDeleted: false,
      },
    });

    if (!tenant) {
      throw { code: "TENANT_NOT_FOUND", message: "Tenant not found" };
    }
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
      if (files && files.length > 0 && imageResults.length > 0) {
        if (currentProperty.propertyImage.length > 0) {
          await tx.propertyImage.deleteMany({
            where: { propertyId: propertyId },
          });
        }
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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw { code: "DUPLICATE_SLUG", message: "Slug already exists" };
      }
      throw { code: "DATABASE_ERROR", message: error.message };
    }
    if ((error as ErrorResponse).code) {
      throw error;
    }
    throw { code: "INTERNAL_SERVER_ERROR", message: "Something went wrong" };
  }
};
