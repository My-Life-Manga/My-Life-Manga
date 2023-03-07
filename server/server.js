import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

// ! DONT TOUCH !
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Enable CORS for all routes
app.use(cors({
  origin: process.env.ORIGIN
}));

// Register a user
app.post(process.env.REGISTER, async (req, res) => {
  const {username, email, password} = req.body;
  console.log(`Registering user: ${username}`);
  const hashedPassword = await bcrypt.hash(password, 10);
  const q = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(q, [username, email, hashedPassword], (err) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({message: "Registration failed"});
    } else {
      console.log("User registered successfully");
      res.status(201).json({message: "Registration successful"});
    }
  });
});

// Login/Authenticate user
app.post(process.env.LOGIN, async (req, res) => {
  const {username, password} = req.body;
  console.log(`Authenticating user: ${username}`);
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [username], async (err, data) => {
    if (err) {
      console.error("Error authenticating user:", err);
      res.status(500).json({message: "Authentication failed"});
    } else if (data.length === 0) {
      console.log("User authentication failed");
      res.status(401).json({message: "Authentication failed"});
    } else {
      const match = await bcrypt.compare(password, data[0].password);
      if (match) {
        console.log("User authenticated successfully");
        res.status(200).json({message: "Authenticated", token: process.env.TOKEN});
      } else {
        console.log("User authentication failed");
        res.status(401).json({message: "Authentication failed"});
      }
    }
  });
});

// profile api
app.get('/profile', (req, res) => {
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  };
  res.json(profile);
});

// server port listener
app.listen(process.env.SERVER_PORT, () => {
  console.log("connected to server");
});