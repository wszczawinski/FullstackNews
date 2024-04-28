import { Router } from "express";
import { login, logout } from "../controllers/auth";

export const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
