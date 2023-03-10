import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const uploadFile = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, process.env.UPLOAD_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO uploads (`filename`, `path`, `createdAt`, `userId`) VALUES (?)";
    const values = [
      req.file.originalname,
      req.file.path,
      new Date().toISOString().slice(0, 19).replace("T", " "),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json({
        message: "File uploaded successfully",
        path: req.file.path,
      });
    });
  });
};
