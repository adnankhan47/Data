const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { title, description, assigned_to, status, priority, due_date } =
      req.body;
    const query = `INSERT INTO Tasks (title, description, assigned_to, status, priority, due_date)
                   VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(
      query,
      [title, description, assigned_to, status, priority, due_date],
      (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Database error", error: err });
        res.status(201).json({
          message: "Task created successfully",
          taskId: result.insertId,
        });
      }
    );
  });

  // Get all tasks (can add filters like status, priority)
  router.get("/", (req, res) => {
    const { status, priority } = req.query;
    let query = "SELECT * FROM Tasks";
    let params = [];

    // Add filters
    // if (status || priority) {
    //   query += " WHERE";
    //   if (status) {
    //     query += " status = ?";
    //     params.push(status);
    //   }
    //   if (priority) {
    //     query += params.length ? " AND priority = ?" : " priority = ?";
    //     params.push(priority);
    //   }
    // }

    db.query(query, params, (err, results) => {
      if (err)
        return res.status(500).json({ message: "Database error", error: err });
      res.status(200).json(results);
    });
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    const query = "SELECT * FROM Tasks WHERE id = ?";

    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(results[0]); // Return the first task found
    });
  });

  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, assigned_to, status, priority, due_date } =
      req.body;

    const query = `UPDATE Tasks SET title = ?, description = ?, assigned_to = ?, status = ?, priority = ?, due_date = ?
                   WHERE id = ?`;
    db.query(
      query,
      [title, description, assigned_to, status, priority, due_date, id],
      (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Database error", error: err });
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully" });
      }
    );
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM Tasks WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err)
        return res.status(500).json({ message: "Database error", error: err });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json({ message: "Task deleted successfully" });
    });
  });

  return router;
};
