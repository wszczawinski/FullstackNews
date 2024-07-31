import { Router } from "express";
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post";

export const postRoutes = Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);
postRoutes.get("/:id", getPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
