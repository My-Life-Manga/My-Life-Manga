import {db} from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import fs from 'fs';
import dotenv from "dotenv";

dotenv.config();

export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, process.env.POST_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = `
      SELECT posts.*, users.name
      FROM posts
             JOIN users ON posts.userId = users.id
      ORDER BY createdAt DESC
    `;

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};


export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, process.env.POST_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
        "INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, process.env.POST_SECRET_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "SELECT img FROM posts WHERE `id`=? AND `userId` = ?";
    const values = [req.params.id, userInfo.id];

    db.query(q, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      // check if img path exists in the database
      if (data.length > 0) {
        const filePath = data[0].img;
        // Delete file from the server
        try {
          fs.unlinkSync(filePath);
          console.log("File removed from the uploads folder:", filePath);
        } catch (error) {
          console.log(error);
        }
      }
      // Delete post from the database
      const q =
          "DELETE FROM posts WHERE `id`=? AND `userId` = ?";
      db.query(q, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
        if (data.affectedRows > 0) return res.status(200).json("Post has been deleted.");
        return res.status(403).json("You can delete only your post")
      });
    });
  });
};