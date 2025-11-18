const conn = require("./db");

const logger = require("./logger");

const updateEmployees = (req, res) => {
  const { id } = req.params;
  const { name, designation, experience, salary } = req.body;
  const updateQuery =
    "UPDATE employees SET name = ?, designation = ?, experience = ?, salary = ? WHERE id = ?";

  conn.query(
    updateQuery,
    [name, designation, experience, salary, id],
    (err, result) => {
      if (err) {
        logger.error(`Error updating employee data: ${err.message}`);
        res.status(500).send("Error updating data");
      } else {
        if (result.affectedRows === 0) {
          logger.warn(`Employee not found: ${id}`);
          res.status(404).send("Employee not found");
        } else {
          logger.info(`Employee updated successfully: ${id}`);
          res.status(200).send("Employee updated successfully");
        }
      }
    }
  );
};

module.exports = updateEmployees;
