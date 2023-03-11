import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
<<<<<<< HEAD:server/connect.js
  host:"localhost",
  user:"root",
  password:"codeup",
  database:"manga_db"
})
=======
  host: process.env.CONNECT_DB_HOST,
  user: process.env.CONNECT_DB_USER,
  password: process.env.CONNECT_DB_PASS,
  database: process.env.CONNECT_DB_DATA,
});
>>>>>>> 32dbd4379d5584cc15548f3353e9b6fe3e4986b9:api/connect.js
