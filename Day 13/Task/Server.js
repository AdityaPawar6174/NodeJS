const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// importing routes
const AddEmployees = require("./AddEmployees.js");
app.post("/employees", AddEmployees);

const GetAllEmployees = require("./GetAllEmployees.js");
app.get("/employees", GetAllEmployees);

const GetEmployeeById = require("./GetEmployeeById.js");
app.get("/employees/:id", GetEmployeeById);

const updateEmployeeById = require("./UpdateEmployee.js");
app.put("/employees/update/:id", updateEmployeeById);

const patchEmployeeById = require("./PatchEmployees.js");
app.patch("/employees/patch/:id", patchEmployeeById);

const DeleteEmployeeById = require("./DeleteEmployee.js");
app.delete("/employees/delete/:id", DeleteEmployeeById);