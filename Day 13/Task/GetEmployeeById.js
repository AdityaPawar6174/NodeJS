const conn = require("./db");

const logger = require("./logger");

const GetEmployeeById = (req, res) => {
  const { id } = req.params;
  const selectQuery = "SELECT * FROM employees WHERE id = ?";

  conn.query(selectQuery, [id], (err, results) => {
    if (err) {
      logger.error(`Error fetching employee data: ${err.message}`);
      res.status(500).send("Error fetching data");
    } else {
      if (results.length === 0) {
        logger.warn(`Employee not found: ${id}`);
        res.status(404).send("Employee not found");
      } else {
        logger.info(`Fetched employee data successfully: ${id}`);
        res.status(200).json(results[0]);
      }
    }
  });
};

module.exports = GetEmployeeById;
