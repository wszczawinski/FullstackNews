import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { postRoutes } from "./routes/posts";
import { authRoutes } from "./routes/auth";
import { imageRoutes } from "./routes/images";

dotenv.config();

const { PORT } = process.env;
const app = express();

const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/images", imageRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`🚀[server]: App running at http://localhost:${PORT}`);
});
