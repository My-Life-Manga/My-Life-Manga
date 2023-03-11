import {db} from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = (req, res) => {
  //CHECK USER IF EXISTS
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json(process.env.AUTH_USER_ExISTS);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(process.env.AUTH_USER_CREATED);
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json(process.env.AUTH_USER_NOT_FOUND);

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json(process.env.AUTH_USER_WRONG);

    const token = jwt.sign({id: data[0].id}, process.env.AUTH_USER_SECRET_KEY);

    const {password, ...others} = data[0];

    res.cookie(process.env.AUTH_USER_ACCESS_TOKEN, token, {
      httpOnly: true,
    }).status(200).json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie(process.env.AUTH_USER_ACCESS_TOKEN, {
    secure: true,
    sameSite: true,
  }).status(200).json(process.env.AUTH_USER_LOGGED_OUT)
};