const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

module.exports = (db) => {
  router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body;

    // Check if the user already exists
    const userCheckQuery = "SELECT * FROM Users WHERE email = ?";
    db.query(userCheckQuery, [email], async (err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into the database
      const query =
        "INSERT INTO Users (username, password, email) VALUES (?, ?, ?)";
      db.query(query, [username, hashedPassword, email], (err, result) => {
        if (err) throw err;
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });

  // User Login
  router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const query = "SELECT * FROM Users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
      if (results.length === 0) {
        return res.status(400).json({ message: "User does not exist" });
      }

      const user = results[0];

      // Compare the hashed password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      // Generate a token (for authentication)
      const token = jwt.sign({ id: user.id }, "your_jwt_secret", {
        expiresIn: "1h",
      });

      res.status(200).json({ message: "Login successful", token });
    });
  });

  return router;
};
