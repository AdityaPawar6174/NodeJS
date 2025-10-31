// REST --> Representational State Transfer
// REST API is used to communicate between client and server over HTTP protocol

const express = require("express");
const app = express();

const fs = require("fs");
const data = fs.readFileSync("./MOCK_DATA.json");
const users = JSON.parse(data);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running on the http://localhost:${port}`);
});

app.get("/api/users", (req, res) => {
  res.send(users);
});

// to get in the html format
app.get("/api/browser", (req, res) => {
  const html = `<ul>${users
    .map((user) => `<li>${user.id} ${user.first_name} ${user.email}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

// to find a particular user
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send("User Not Found");
    }
})
