import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import cors from "cors";

dotenv.config();

const {
  PORT,
  MY_SQL_DB_HOST,
  MY_SQL_DB_USER,
  MY_SQL_DB_PASSWORD,
  MY_SQL_DB_DATABASE,
} = process.env;

const db = mysql.createConnection({
  host: MY_SQL_DB_HOST,
  user: MY_SQL_DB_USER,
  password: MY_SQL_DB_PASSWORD,
  database: MY_SQL_DB_DATABASE,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/posts", (req, res) => {
  const query = "SELECT * FROM posts";
  db.query(query, (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.post("/posts", (req, res) => {
  const q = "INSERT INTO posts (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log(`🚀[server]: App running at http://localhost:${PORT}`);
});
