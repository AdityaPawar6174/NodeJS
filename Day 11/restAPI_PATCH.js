// PATCH Method --> To update partial data of a resource
// In PUT method, we update the entire resource whereas in PATCH we update only specific fields of a resource

// Example: Update only email of a student with id 1


const express = require("express");
const app = express();
const fs = require("fs");

const port = 3001;
app.listen(port, () => {
  console.log(`Server Running on the http://localhost:${port}`);
});

app.use(express.json());

var students = [];
const data = fs.readFileSync("./Task/Student_Data.json");
students = JSON.parse(data);   

// Update a student's email
app.patch("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { email } = req.body;

    const student = students.find((s) => s.id === id);
    if(student) {
        student.email = email;
        
        fs.writeFileSync("./Task/Student_Data.json", JSON.stringify(students));

        res.send("Student email updated successfully");
    }
})
