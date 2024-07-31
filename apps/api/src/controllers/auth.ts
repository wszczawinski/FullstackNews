import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RowDataPacket } from "mysql2";
import { Request, Response } from "express";

import { db } from "../db";

const { JWT_KEY } = process.env;

const cookieKey = "access_token";

export const register = (req: Request, res: Response) => {
  const q = "SELECT * FROM user WHERE username = ?";

  db.query<RowDataPacket[]>(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO user(`username`,`password`) VALUES (?)";
    const values = [req.body.username, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req: Request, res: Response) => {
  const q = "SELECT * FROM user WHERE username = ?";

  db.query<RowDataPacket[]>(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found.");

    const { password, ...otherUserData } = data[0];

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, password);

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password.");
    }

    const token = jwt.sign({ id: data[0].id }, String(JWT_KEY), {
      expiresIn: "1h",
    });

    res
      .cookie(cookieKey, token, { httpOnly: true })
      .status(200)
      .json({ ...otherUserData, message: "User logged in successfully!" });
  });
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie(cookieKey, {
      sameSite: true,
      secure: true,
    })
    .status(200)
    .json({ message: "User logged out." });
};
