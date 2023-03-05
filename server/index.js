const path = require("path");
const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const PORT = 3001; // replace with desired port number

const app = express();

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Connect to MySQL database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_database",
  port: 3306, // replace with the port number of your MySQL database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Handle POST requests to /api/register route
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user with email already exists
    const [result] = await pool.query("SELECT COUNT(*) as count FROM users WHERE email = ?", [email]);
    if (result[0].count > 0) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user into database
    const [insertResult] = await pool.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [
      username,
      email,
      hashedPassword,
    ]);
    if (insertResult.affectedRows === 1) {
      return res.status(201).json({ message: "User created successfully" });
    } else {
      return res.status(500).json({ message: "Failed to create user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// Handle POST requests to /api/login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user with username exists
    const [result] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare password hash
    const match = await bcrypt.compare(password, result[0].password);
    if (!match) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create and sign JWT token
    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ message: "Authenticated", token: token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
