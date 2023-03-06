import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

// ! DONT TOUCH !
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: "codeup",
  database: "manga_db",
});

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Register a user
app.use(express.json());

app.post("/register", (req, res) => {
  const {username, email, password} = req.body;
  console.log(`Registering user: ${username} ${email} ${password}`);
  const q = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(q, [username, email, password], (err, data) => {
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
// Login a user
app.post("/login", (req, res) => {
  const {username, password} = req.body;
  console.log(`Authenticating user: ${username} ${password}`);
  const q = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(q, [username, password], (err, data) => {
    if (err) {
      console.error("Error authenticating user:", err);
      res.status(500).json({message: "Authentication failed"});
    } else if (data.length === 0) {
      console.log("User authentication failed");
      res.status(401).json({message: "Authentication failed"});
    } else {
      console.log("User authenticated successfully");
      res.status(200).json({message: "Authenticated", token: "example_auth_token"});
    }
  });
});

// Test to make sure backend is connected
app.get("/", (req, res) => {
  res.json("hello from backend");
});

// test to see if database getting info to the server
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

// server port listener
app.listen(3001, () => {
  console.log("connected to server");
});
