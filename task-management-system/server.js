const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 5000;

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ak78617861#",
  database: "task_management",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/users/", userRoutes(db));
app.use("/api/tasks/", taskRoutes(db));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
