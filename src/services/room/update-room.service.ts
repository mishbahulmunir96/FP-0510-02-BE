import prisma from "../../lib/prisma";
import { cloudinaryUpload } from "../../lib/cloudinary";
import { Prisma } from "../../../prisma/generated/client";

// Interface for a single facility
interface RoomFacility {
  id?: number; // Optional id for existing facilities
  title: string;
  description: string;
  isDeleted?: boolean; // For marking a facility for deletion
}

interface UpdateRoomBody {
  type?: "Deluxe" | "Standard" | "Suite";
  name?: string;
  stock?: number;
  price?: number;
  guest?: number;
  facilities?: RoomFacility[]; // Array of facilities instead of single facility
  // propertyId tidak diizinkan untuk diupdate, jadi tidak dimasukkan di sini
}

export const updateRoomService = async (
  id: number,
  body: Partial<UpdateRoomBody>,
  file?: Express.Multer.File
) => {
  try {
    // Cari room berdasarkan id beserta relasi roomImage dan roomFacility
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

    // Pastikan field numeric dikonversi ke number (jika body dikirim sebagai string)
    if (body.stock !== undefined) {
      body.stock = Number(body.stock);
    }
    if (body.price !== undefined) {
      body.price = Number(body.price);
    }
    if (body.guest !== undefined) {
      body.guest = Number(body.guest);
    }

    // Pastikan propertyId tidak diupdate jika ada di body
    if ("propertyId" in body) {
      delete body["propertyId"];
    }

    // Pisahkan data facility dari body
    const { facilities, ...roomData } = body;

    // Persiapkan data update untuk room
    const updatedData: Prisma.RoomUpdateInput = {
      ...roomData,
    };

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update data room
      const updatedRoom = await tx.room.update({
        where: { id },
        data: updatedData,
      });

      // Jika file diunggah, update atau buat record roomImage
      if (file && secureUrl) {
        if (existingRoom.roomImage.length > 0) {
          // Update gambar room pertama yang ada
          await tx.roomImage.update({
            where: { id: existingRoom.roomImage[0].id },
            data: { imageUrl: secureUrl },
          });
        } else {
          // Buat record roomImage baru
          await tx.roomImage.create({
            data: {
              imageUrl: secureUrl,
              roomId: id,
            },
          });
        }
      }

      // Jika terdapat update fasilitas
      if (facilities && Array.isArray(facilities)) {
        // Map existing facility ids untuk referensi cepat
        const existingFacilityIds = new Set(
          existingRoom.roomFacility.map((facility) => facility.id)
        );

        // Proses setiap fasilitas dalam array
        for (const facility of facilities) {
          if (facility.id && existingFacilityIds.has(facility.id)) {
            // Update existing facility
            if (facility.isDeleted) {
              // Soft delete facility jika ditandai
              await tx.roomFacility.update({
                where: { id: facility.id },
                data: { isDeleted: true },
              });
            } else {
              // Update facility yang ada
              await tx.roomFacility.update({
                where: { id: facility.id },
                data: {
                  title: facility.title,
                  description: facility.description,
                },
              });
            }

            // Hapus id dari set untuk melacak mana yang sudah diproses
            existingFacilityIds.delete(facility.id);
          } else if (!facility.id) {
            // Buat facility baru jika id tidak ada
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

      // Ambil data room yang sudah diupdate dengan semua relasinya
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
