// Demonstration of POST request in Postman using Express.js

const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.json());
app.post('/', (req, res) => {
    const {name} = req.body;
    res.send(`Welcome, ${name}!`);

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});