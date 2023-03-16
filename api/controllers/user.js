import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");
        const { password, ...info } = data[0];
        return res.json(info);
    });
};

export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.USER_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q =
            "UPDATE users SET `name`=?, `city`=?, `website`=?, `profilePic`=?, `coverPic`=?, `about_me`=?, `interests`=? WHERE id=?"

        db.query(
            q,
            [
                req.body.name,
                req.body.city,
                req.body.website,
                req.body.profilePic,
                req.body.coverPic,
                req.body.about_me,
                req.body.interests,
                userInfo.id,
            ],
            (err, data) => {
                if (err) res.status(500).json(err);
                if (!data || data.affectedRows === 0) return res.status(404).json("User not found!");
                if (data.affectedRows > 0) return res.json("Updated!");
                return res.status(403).json("You can update only your post!");
            }
        );
    });
};