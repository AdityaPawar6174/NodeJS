// Establish the connection with mongoose
// create the schema
// create a model
// perform CRUD operation

const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/aditya")
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log("mongo error", err));

//create a scehma
const userschema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  USN: {
    type: String,
    required: true,
    unique: true,
  },
});

//create a model
const Student = mongoose.model("student", userschema);
app.use(express.urlencoded({ extended: false }));

app.get("/students", async (req, res) => {
  const allstudents = await Student.find({});

  const html = `
        <ul>
            ${allstudents
              .map((student) => `<li>${student.Name} - ${student.USN}</li>`)
              .join("")}
        </ul>
    `;

  res.send(html);
});

app.patch("/students/:id", async (req, res) => {
  const updateStudent = await Student.findByIdAndUpdate(
    req.params.id,
    { USN: "1CS2" },
    { new: true }
  );
  res.json(updateStudent);
});

app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  return res.status(201).json({ msg: "success" });
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await Student.create({
    Name: body.Name,
    USN: body.USN,
  });
  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});

app.listen(3090, () => console.log("server is running"));
