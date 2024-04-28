import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import jwt from "jsonwebtoken";

import { db } from "../db";

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

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherUserData);
  });
};

export const logout = (req: Request, res: Response) => {
  res.json("from auth controller");
};
