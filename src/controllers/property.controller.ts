// import { Request, Response, NextFunction } from "express";
// import { getPropertiesService } from "../services/property/get-properties.service";

// export const getPropertiesController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const query = {
//       take: parseInt(req.query.take as string) || 4,
//       page: parseInt(req.query.page as string) || 1,
//       sortBy: (req.query.sortBy as string) || "createdAt",
//       sortOrder: (req.query.sortOrder as string) || "desc",
//       search: (req.query.search as string) || "",
//       guest: Number(req.query.guest) || 2,
//       title: (req.query.title as string) || "",
//       startDate: (req.query.startDate as string) || "",
//       endDate: (req.query.endDate as string) || "",
//       location: (req.query.location as string) || "",
//       category: (req.query.category as string) || "",
//     };

//     const properties = await getPropertiesService(query);

//     res.status(200).json({
//       message: "Success get property list",
//       data: properties,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
