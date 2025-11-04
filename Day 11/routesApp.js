
const express = require("express");
const app = express();

const port = 3002;
app.listen(port, () => {
  console.log(`Server Running on the http://localhost:${port}`);
});

app.use(express.json());

const { getUser, getUserBrow, getUserById } = require("./routess.js"); // COMMONJS MODULE SYNTAX

// import { getUser, getUserBrow, getUserById } from "./routess.js";   --- ES6 MODULE SYNTAX ---

// to get all users
app.get("/app1", getUser);
// to get all users in browser format
app.get("/brow", getUserBrow);
// to get user by id
app.get("/app1/users/:id", getUserById);