import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const {
  MY_SQL_DB_HOST,
  MY_SQL_DB_USER,
  MY_SQL_DB_PASSWORD,
  MY_SQL_DB_DATABASE,
} = process.env;

export const db = mysql.createConnection({
  host: MY_SQL_DB_HOST,
  user: MY_SQL_DB_USER,
  password: MY_SQL_DB_PASSWORD,
  database: MY_SQL_DB_DATABASE,
});
