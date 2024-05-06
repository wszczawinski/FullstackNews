import { Request, Response } from "express";

export const getImages = (req: Request, res: Response) => {};

export const createImages = (req: Request, res: Response) => {
  if (req.files) {
    console.log(req.files);
  }

  return res.status(200).json("Images upload completed successfully!");
};
