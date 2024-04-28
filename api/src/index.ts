import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { postRoutes } from "./routes/posts";
import { authRoutes } from "./routes/auth";

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`🚀[server]: App running at http://localhost:${PORT}`);
});
