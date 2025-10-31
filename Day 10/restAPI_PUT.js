// PUT --> update name of a particular user whose id is given

// 1. recieve id from the params and name from the body {"first_name":"first_name"}
// 2. find the user with the given id
// 3. update the name of the user
// 4. write the updated data into mock_data.json file

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

app.put("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);  // to recieve id from params
    const {first_name} = req.body;       // to recieve name from body

    const user = users.find((u) => u.id === id);
    user.first_name = first_name;   // to update the name of the user

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if(err){
            console.log(err);
            res.status(500).send("Error writing to file");
            return;
        }
        else{
            console.log("Data Updated Successfully");
            res.send("User Updated Successfully");
        }
    }); // to write updated data into mock_data.json file
});