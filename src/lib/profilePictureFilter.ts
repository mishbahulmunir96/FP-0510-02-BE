import { NextFunction, Request, Response } from "express";
import { fromBuffer } from "file-type";

export const fileFilterProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];

    const MAX_FILE_SIZE = 1 * 1024 * 1024;

    for (const fieldName in files) {
      const fileArray = files[fieldName];
      for (const file of fileArray) {
        if (file.size > MAX_FILE_SIZE) {
          throw new Error(`File size exceeds 1MB limit`);
        }
        const type = await fromBuffer(file.buffer);
        if (!type || !allowedTypes.includes(type?.mime)) {
          throw new Error(
            `File type ${type?.mime} is not allowed. Only .jpg, .jpeg, .png and .gif are allowed`
          );
        }
      }
    }

    next();
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).json({
      status: 400,
      message: errorMessage,
    });
  }
};
