const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql2/promise");
const app = express();
const port = 3001;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Aditya@123",
  database: "student_db",
});

app.post("/login", async (req, res) => {
  const { id, name, salary } = req.body;
  try {
    const[rows] = await pool.execute(
      `SELECT * FROM students WHERE id = "${id}" and name = "${name}" and salary = "${salary}"`
    );
    if (rows.length > 0) {
      res.send("sql login successful");
    } else {
      res.send("sql login failed");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// to prevent SQL Injection, use parameterized queries

app.post("/safe-login", async (req, res) => {
    const { id, name, salary } = req.body;
    try {
        const [rows] = await pool.execute(
            'SELECT * FROM students WHERE id = ? AND name = ? AND salary = ?',
            [id, name, salary]
        );
        if (rows.length > 0) {
            res.send("SQL login successful (safe)");
        } else {
            res.send("SQL login failed (safe)");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
