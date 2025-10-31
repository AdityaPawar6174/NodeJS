
const express = require('express');
const app = express();
const port = 2025;

const path = require('path');

app.listen(port, () => {
    console.log(`Server is Running on the PORT: http://localhost:${port}`);
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});