import { Request, Response } from "express";

import { PostsQueryParams } from "@packages/types";

import { db } from "../db";

type TypedRequest<T> = Request<{}, any, any, T>;

export const getPosts = (
  req: TypedRequest<PostsQueryParams>,
  res: Response
) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const query = "SELECT * FROM posts limit ? offset ?";
  db.query(query, [limit, offset], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
};

export const getPost = (
  req: Request,
  res: Response
) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const query = "SELECT * FROM posts limit ? offset ?";
  db.query(query, [limit, offset], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
};

export const createPost = (req: Request, res: Response) => {
  const q = "INSERT INTO posts (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
};

export const updatePost = (req: Request, res: Response) => {
  const q = "INSERT INTO posts (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
};

export const deletePost = (req: Request, res: Response) => {
  const q = "INSERT INTO posts (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
};
