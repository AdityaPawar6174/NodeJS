// DATBASE CONNCECTIVITY

// Import mysql2 package
const mysql = require("mysql2");

const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port --> http://localhost:3000");
});

// Create a connection to the database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aditya@123",
  database: "node",
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// CRUD OPERATIONS

// READ OPERATION
app.get("/dbconn/students", (req, res) => {
  conn.query("SELECT * FROM student", (err, rows) => {
    if (err) console.log(err);
    res.send(rows);
  });
});

app.get("/dbconn/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  conn.query("SELECT * FROM student WHERE id = ?", [studentId], (err, row) => {
    if (err) console.log(err);
    res.send(row);
  });
});

// CREATE OPERATION
app.post("/dbconn/students", (req, res) => {
  const body = req.body;

  // begin transaction --> to ensure data integrity
  conn.beginTransaction((err) => {
    if (err) console.log("error in the querying", err);
  });

  conn.query(
    "INSERT INTO student values (?, ?, ?)",
    Object.values(body),
    (err) => {
      if (err) console.log(err);

      // commit the transaction --> to save the changes
      conn.commit((err) => {
        if (err) console.log("error in the committing", err);
        res.send("Data inserted successfully");
      });
      console.log(body);
    }
  );
});

// DELETE OPERATION
app.delete("/dbconn/students/:id", (req, res) => {
  const id = req.params.id;

  conn.query("DELETE FROM student WHERE id = ?", [id], (err) => {
    if (err) console.log(err);
    res.send("Data deleted successfully");
  });
});

// UPDATE OPERATION
app.put("/dbconn/students/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  conn.query(
    "UPDATE student SET name = ?, branch = ? WHERE id = ?",
    [...Object.values(body), id],
    (err) => {
      if (err) console.log(err);
      res.send("Data updated successfully");
    }
  );

  conn.commit((err) => {
    if (err) console.log("error in the committing", err);
  });
});

app.patch("/dbconn/students/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  conn.query(
    "UPDATE student SET name = ? WHERE id = ?",
    [body.name, id],
    (err) => {
      if (err) console.log(err);
      res.send("Data updated successfully");
    }
  );

  conn.commit((err) => {
    if (err) console.log("error in the committing", err);
  });
});


