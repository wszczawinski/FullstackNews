import { Router } from "express";
import { createPost, getPosts } from "../controllers/post";

export const postRoutes = Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", createPost);
