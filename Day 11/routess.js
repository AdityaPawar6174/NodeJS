const express = require("express");
const app = express();

const fs = require("fs");

let usrs = fs.readFileSync("./Task/Student_Data.json");
var users = JSON.parse(usrs);

const getUser = (req, res) => {
  res.send(users);
};

const getUserBrow = (req, res) => {
  const html = `<ul>${users
    .map((user) => `<li>${user.name} - ${user.email}</li>`)
    .join("")}</ul>`;
  res.send(html);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports = { getUser, getUserBrow, getUserById }; // COMMONJS MODULE SYNTAX
