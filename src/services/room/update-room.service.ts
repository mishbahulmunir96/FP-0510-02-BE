import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";
import { Prisma } from "../../../prisma/generated/client";

interface RoomFacility {
  id?: number;
  title: string;
  description: string;
  isDeleted?: boolean;
}

interface UpdateRoomBody {
  type?: "Deluxe" | "Standard" | "Suite";
  name?: string;
  stock?: number;
  price?: number;
  guest?: number;
  facilities?: RoomFacility[];
}

export const updateRoomService = async (
  id: number,
  body: Partial<UpdateRoomBody>,
  file?: Express.Multer.File
) => {
  try {
    const existingRoom = await prisma.room.findUnique({
      where: { id },
      include: {
        roomImage: true,
        roomFacility: {
          where: { isDeleted: false },
        },
      },
    });

    if (!existingRoom) {
      throw new Error("Room not found");
    }

    let secureUrl: string | undefined;
    if (file) {
      const uploadResult = await cloudinaryUpload(file);
      secureUrl = uploadResult.secure_url;
    }

    if (body.stock !== undefined) {
      body.stock = Number(body.stock);
    }
    if (body.price !== undefined) {
      body.price = Number(body.price);
    }
    if (body.guest !== undefined) {
      body.guest = Number(body.guest);
    }

    if ("propertyId" in body) {
      delete body["propertyId"];
    }
    const { facilities, ...roomData } = body;

    const updatedData: Prisma.RoomUpdateInput = {
      ...roomData,
    };

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const updatedRoom = await tx.room.update({
        where: { id },
        data: updatedData,
      });

      if (file && secureUrl) {
        if (existingRoom.roomImage.length > 0) {
          await tx.roomImage.update({
            where: { id: existingRoom.roomImage[0].id },
            data: { imageUrl: secureUrl },
          });
        } else {
          await tx.roomImage.create({
            data: {
              imageUrl: secureUrl,
              roomId: id,
            },
          });
        }
      }

      if (facilities && Array.isArray(facilities)) {
        const existingFacilityIds = new Set(
          existingRoom.roomFacility.map((facility) => facility.id)
        );
        for (const facility of facilities) {
          if (facility.id && existingFacilityIds.has(facility.id)) {
            if (facility.isDeleted) {
              await tx.roomFacility.update({
                where: { id: facility.id },
                data: { isDeleted: true },
              });
            } else {
              await tx.roomFacility.update({
                where: { id: facility.id },
                data: {
                  title: facility.title,
                  description: facility.description,
                },
              });
            }

            existingFacilityIds.delete(facility.id);
          } else if (!facility.id) {
            await tx.roomFacility.create({
              data: {
                title: facility.title,
                description: facility.description,
                roomId: id,
              },
            });
          }
        }
      }

      const roomWithRelations = await tx.room.findUnique({
        where: { id: updatedRoom.id },
        include: {
          roomFacility: {
            where: { isDeleted: false },
          },
          roomImage: true,
        },
      });

      return {
        message: "Update room success",
        data: roomWithRelations,
      };
    });
  } catch (error) {
    throw error;
  }
};
