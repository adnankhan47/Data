const User = require("../models/User");

let users = []; // In-memory user storage (replace with database logic)

exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User(users.length + 1, username, email, password);
  users.push(newUser);
  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  res.status(200).json({ message: "Login successful", user });
};
