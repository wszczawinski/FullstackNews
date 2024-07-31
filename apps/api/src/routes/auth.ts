import { Router } from "express";
import { login, logout, register } from "../controllers/auth";

export const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/register", register);
