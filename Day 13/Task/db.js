
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aditya@123",
  database: "company",
});

conn.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("----- Connected to the MySQL database -----");
  }
});

module.exports = conn;