// DELETE --> To delete a resource from the server  

// find the user and delete the user found

const express = require('express');
const app = express();

const fs = require('fs');

const port = 3000;
app.listen(port, () => {
    console.log(`Server Running on the http://localhost:${port}`);
})

var users = [];
const data = fs.readFileSync("./MOCK_DATA.json");
users = JSON.parse(data);

app.use(express.json()); // middleware to parse JSON body

app.delete("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);  // to recieve id from params

    const userId = users.findIndex((u) => u.id === id);

    users.splice(userId, 1);   // to delete the user, which is found

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if(err){
            console.log(err);
            res.status(500).send("Error writing to file");
            return;
        }
        else{
            console.log("Data Deleted Successfully");
            res.send("User Deleted Successfully");
        }
    }); // to write updated data into mock_data.json file
});