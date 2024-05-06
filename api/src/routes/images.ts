import dayjs from "dayjs";
import { Router } from "express";
import { stat, mkdir } from "fs";
import multer from "multer";
import path from "path";

import { createImages, getImages } from "../controllers/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const currentDate = dayjs().format("YYYY-MM-DD-HH-mm-ss");
    const dir = path.resolve(__dirname, `../media/${currentDate}`);
    stat(dir, (err, stats) => {
      if (err) {
        return mkdir(dir, (error) => cb(error, dir));
      }
      return cb(null, dir);
    });
  },
  filename: function (req, file, cb) {
    const { base } = path.parse(file.originalname);
    cb(null, base);
  },
});

const upload = multer({ storage });

const uploadMultiple = upload.fields([{ name: "images" }]);

export const imageRoutes = Router();
imageRoutes.get("/", getImages);
imageRoutes.post("/", uploadMultiple, createImages);
