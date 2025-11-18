const express = require("express");
const logger = require("./logger");

const bodyParser = require("body-parser"); // Middleware to parse JSON bodies

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
});

app.post("/register", (req, res) => {
    const {username, email} = req.body;

    if(!username || !email){
        logger.error('Validation failed: username and email are required');
        return res.status(400).json({error: 'Username and email are required' });
    }

    if(!email.includes('@')) {
        logger.warn('Validation warning: email format is incorrect');
        return res.status(400).json({error: 'Invalid email' });
    }

    logger.info(`User ${username} registered successfully`);
    res.status(200).json({message: 'Registration successful'})
});

app.use((err, req, res, next) => {
    logger.error(`unhandled error: ${err.message}`);
    res.status(500).json({error: 'Internal Server Error'});
})