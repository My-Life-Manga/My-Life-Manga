import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host:"my-manga-db.cnwidfzee54g.us-east-1.rds.amazonaws.com",
  user:"admin",
  password:"Germany0307",
  database:"manga_db"
})