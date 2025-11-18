const conn = require("./db");

const logger = require("./logger");

const AddEmployees = (req, res) => {
  const { id, name, designation, experience, salary } = req.body;

  const insertQuery =
    "INSERT INTO employees (id, name, designation, experience, salary) VALUES (?, ?, ?, ?, ?)";
  conn.query(
    insertQuery,
    [id, name, designation, experience, salary],
    (err, result) => {
      if (err) {
        logger.error(`Error inserting employee data: ${err.message}`);
        return res.status(500).send("Error inserting data");
      } else {
        logger.info(`Employee added successfully: ${JSON.stringify(req.body)}`);
        return res.status(201).send({message: "Employee added successfully"});
      }
    }
  );
};

module.exports = AddEmployees;
