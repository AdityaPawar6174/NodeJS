// Accepting the Parameters from the URL header

const express = require('express');
const app = express();
const port = 2025;

const path = require('path');

app.listen(port, () => {
    console.log(`Server is Running on the PORT: http://localhost:${port}`);
})

// Accepting the Parameters --> Using the Colon(:) Symbol

// by request params
app.get('/user/:name', (req, res) => {
    res.send('<h1>Hello '+req.params.name+' </h1>')
});

// by query params
app.get('/search', (req, res) => {
    res.send('<h1>Search Result for: '+req.query.name+' </h1>')
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/user.html'));
});

app.get('/userInfo', (req, res) => {
    res.json({username: req.query.name})
});