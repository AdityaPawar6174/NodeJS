const conn = require("./db");

const logger = require("./logger");

const GetAllEmployees = (req, res) => {
  const selectQuery = "SELECT * FROM employees";

  conn.query(selectQuery, (err, results) => {
    if (err) {
      logger.error(`Error fetching employee data: ${err.message}`);
      res.status(500).send("Error fetching data");
    } else {
      logger.info("Fetched all employees successfully");
      res.status(200).json(results);
    }
  });
};

module.exports = GetAllEmployees;
