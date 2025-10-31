// Accepting the Parameters from the URL header

const express = require('express');
const app = express();
const port = 2025;

const path = require('path');

app.listen(port, () => {
    console.log(`Server is Running on the PORT: http://localhost:${port}`);
})

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/views/index.html'));    
}
);

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/user/:name', (req, res) => {
    res.send('<h1>Hello '+req.params.name+' </h1>')
});

app.get('/search', (req, res) => {
    res.send('<h1>Search Result for: '+req.query.name+' </h1>')
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/user.html'));
});

app.get('/userInfo', (req, res) => {
    res.json({username: req.query.name, age: req.query.age, address: req.query.address});
});