import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";
interface RoomFacility {
  title: string;
  description: string;
}

interface CreateRoomBody {
  type: "Deluxe" | "Standard" | "Suite";
  stock: number;
  name?: string;
  price: number;
  guest: number;
  propertyId: number;
  facilities: RoomFacility[];
}

export const createRoomService = async (
  body: CreateRoomBody,
  file: Express.Multer.File,
  tenantId: number
) => {
  try {
    const { type, name, stock, price, guest, propertyId, facilities } = body;

    const propertyIdNoNaN = Number(propertyId);
    const stockRoom = Number(stock);
    const priceRoom = Number(price);
    const guestRoom = Number(guest);

    const property = await prisma.property.findFirst({
      where: { id: propertyIdNoNaN },
    });
    if (!property) {
      throw new Error("Property id not found");
    }

    if (!facilities || !Array.isArray(facilities) || facilities.length === 0) {
      throw new Error("At least one facility must be provided");
    }

    let secureUrl: string | undefined;
    if (file) {
      const uploadResult = await cloudinaryUpload(file);
      secureUrl = uploadResult.secure_url;
    }

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const newRoom = await tx.room.create({
        data: {
          type,
          name,
          stock: stockRoom,
          price: priceRoom,
          guest: guestRoom,
          property: {
            connect: { id: propertyIdNoNaN },
          },
        },
      });

      if (file && secureUrl) {
        await tx.roomImage.create({
          data: {
            imageUrl: secureUrl,
            roomId: newRoom.id,
          },
        });
      }
      const facilityPromises = facilities.map((facility) =>
        tx.roomFacility.create({
          data: {
            title: facility.title,
            description: facility.description,
            roomId: newRoom.id,
          },
        })
      );
      await Promise.all(facilityPromises);

      const roomWithRelations = await tx.room.findUnique({
        where: { id: newRoom.id },
        include: {
          roomFacility: true,
          roomImage: true,
        },
      });

      return {
        message: "Create Room success",
        data: roomWithRelations,
      };
    });
  } catch (error) {
    throw error;
  }
};
