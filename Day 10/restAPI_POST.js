
// POST --> add new Data

// 1. recieve data from the user {"id":id, "first_name":"first_name", "email":"email"}
// 2. Insert the Data into an Array
// 3. Push function to add in to the array
// 4. Read the Data from mock_data.json file
// 5. add in to the mock_data.json file

const e = require('express');
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

app.post('/api/users', (req, res) => {
    // const body = req.body;  // to recieve data from user
    const newId = users.length + 1;
    const {first_name, email} = req.body; 
    users.push({"id":newId, "first_name":first_name, "email":email});      // to insert data into array

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if(err){
            console.log(err);
            res.status(500).send("Error writing to file");
            return;
        }
        else{
            console.log("Data Written Successfully");
            res.send("User Added Successfully");
        }
    }); // to add data into mock_data.json file

});



