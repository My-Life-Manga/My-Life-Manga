const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Allow all cross-origin requests
app.use(cors());

// Parse request body as JSON
app.use(express.json());

// Route to register new users
app.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user");
    } else {
      res.status(201).send("New user registered successfully");
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
