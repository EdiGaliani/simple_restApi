require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error retrieving users");
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error retrieving user");
    }
    if (result.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(result[0]);
  });
});

app.post("/users", (req, res) => {
  const { name, age } = req.body;
  if (!name || typeof age !== "number") {
    return res.status(400).send("Fields name and age are required");
  }
  db.query(
    "INSERT INTO users (name, age) VALUES (?, ?)",
    [name, age],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error creating user");
      } else {
        res.status(201).json(result);
      }
    }
  );
});

app.put("/users", (req, res) => {
  if (!id || !name || typeof age !== "number") {
    return res.status(400).send("Fields id, name, and age are required");
  }

  const { id, name, age } = req.body;
  db.query(
    "UPDATE users SET name = ?, age = ? WHERE id = ?",
    [name, age, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Error updating user");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send("Error deleting user");
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
