
const express = require('express'); // Import the Express module

const app = express(); // Create an Express application

const PORT = 3000; // Define the port number
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Start the server and log the URL
});


app.get('/', (req, res) => {
  res.send('Welcome to the Express Session!'); // Send a response for the root route
});

app.get('/about', (req, res) => {
  res.send('This is the about page of our Express application.'); // Send a response for the about route
});

// --------------------------------------------

const path = require('path'); // Import the Path module for handling file paths

app.get('/index.html', (req, res) => { 
    res.sendFile(path.join(__dirname + '/index.html')); // Send the index.html file for the /index.html route
});

app.get('/index2.html', (req, res) => { 
    res.redirect(301, '/index.html');
}); // Redirect /index2.html to /index.html with a 301 status code


