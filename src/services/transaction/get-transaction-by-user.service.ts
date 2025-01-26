// import prisma from "../../lib/prisma";

// export const getTransactionByUserService = async (id: number) => {
//   try {
//     const transaction = await prisma.transaction.findUnique({
//       where: { id },
//       include: {
//         // Mengambil transaksi terkait lainnya berdasarkan roomId dan rentang tanggal
//         room: true, // Menyertakan data kamar jika diperlukan
//       },
//     });

//     if (!transaction) {
//       throw new Error("Invalid transaction id");
//     }

//     // Mengambil semua transaksi terkait berdasarkan roomId
//     const relatedTransactions = await prisma.transaction.findMany({
//       where: {
//         userId: transaction.userId,
//         roomId: transaction.roomId,
//         startDate: { lte: transaction.endDate }, // Memastikan overlap tanggal
//         endDate: { gte: transaction.startDate },
//       },
//     });

//     // Menghitung durasi menginap
//     const stayDays = Math.ceil(
//       (new Date(transaction.endDate).getTime() -
//         new Date(transaction.startDate).getTime()) /
//         (1000 * 60 * 60 * 24)
//     ); // Menghitung jumlah malam

//     // Besar harapan untuk data output
//     return {
//       id: transaction.id,
//       uuid: transaction.uuid,
//       userId: transaction.userId,
//       roomId: transaction.roomId,
//       status: transaction.status,
//       totalPrice: relatedTransactions.reduce(
//         (sum, trans) => sum + trans.total,
//         0
//       ), // Hitung total dari semua transaksi terkait
//       stay: stayDays, // Menyimpan durasi menginap
//       startDate: transaction.startDate,
//       endDate: transaction.endDate,
//       createdAt: transaction.createdAt,
//       transactions: relatedTransactions, // Kembalikan semua transaksi terkait jika diperlukan
//     };
//   } catch (error) {
//     throw error;
//   }
// };
