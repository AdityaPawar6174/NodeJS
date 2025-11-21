// NOSQL Injection Prevention Example

const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/aditya")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongo error", err));

const userlogin = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("userlogin", userlogin);

app.use(express.urlencoded({ extended: false }));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) return res.json(user);
  res.status(401).send("unauthorized");
});

app.listen(3090, () => console.log("Server Listening"));
