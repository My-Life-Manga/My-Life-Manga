import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.CONNECT_DB_HOST,
  user: process.env.CONNECT_DB_USER,
  password: process.env.CONNECT_DB_PASS,
  database: process.env.CONNECT_DB_DATA,
});