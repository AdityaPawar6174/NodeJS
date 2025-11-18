const conn = require("./db");

const logger = require("./logger");

const DeleteEmployeeById = (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM employees WHERE id = ?";

    conn.query(deleteQuery, [id], (err, result) => {
        if (err) {
            logger.error(`Error deleting employee data: ${err.message}`);
            res.status(500).send("Error deleting data");
        } else {
            if (result.affectedRows === 0) {
                logger.warn(`Employee not found: ${id}`);
                res.status(404).send('Employee not found');
            }
            else {
                logger.info(`Employee deleted successfully: ${id}`);
                res.status(200).send("Employee deleted successfully");
            }
        }
    });
};

module.exports = DeleteEmployeeById;