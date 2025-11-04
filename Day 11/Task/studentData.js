// implement all crud operations using REST style on the Student Data
// {id, name, branch and Email} in the single file using express and fs module

const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running on the http://localhost:${port}`);
});

app.use(express.json());

var students = [];
const data = fs.readFileSync("./Student_Data.json");
students = JSON.parse(data);


// Create a new student
app.post("/api/students", (req, res) => {
  const newId = students.length + 1;
  const { name, branch, email } = req.body;

  const newStudent = { id: newId, name, branch, email };
  students.push(newStudent);

  fs.writeFile("./Student_Data.json", JSON.stringify(students), (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error writing to file");
      return;
    } else {
      console.log("Student Added Successfully");
      res.send("Student Added Successfully");
    }
  });
});


// Read all students
app.get("/api/students", (req, res) => {
  res.json(students);
});


// Read Student by Id
app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find((s) => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});


// Update a student's details
app.put("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, branch, email } = req.body;

  const student = students.find((s) => s.id === id);
  if (student) {
    student.name = name || student.name;
    student.branch = branch || student.branch;
    student.email = email || student.email;

    fs.writeFile("./Student_Data.json", JSON.stringify(students), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error writing to file");
        return;
      } else {
        console.log("Student Updated Successfully");
        res.send("Student Updated Successfully");
      }
    });
  } else {
    res.status(404).send("Student not found");
  }
});


// Delete a student
app.delete("/api/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const studentIndex = students.findIndex((s) => s.id === id);
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);

    fs.writeFile("./Student_Data.json", JSON.stringify(students), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error writing to file");
        return;
      } else {
        console.log("Student Deleted Successfully");
        res.send("Student Deleted Successfully");
      }
    });
  } else {
    res.status(404).send("Student not found");
  }
});
