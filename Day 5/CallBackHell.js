const fs = require("fs");

// Callback Hell Example

fs.readFile("./file1.txt", "utf-8", (err, data1) => {
  if (err) throw err;
  fs.readFile("./file2.txt", "utf-8", (err, data2) => {
    if (err) throw err;
    fs.writeFile("final.txt", data1 + data2, (err) => {
      if (err) throw err;
      console.log("Files combined successfully!");
    });
  });
});

// to overcome callback hell we use promises and async await in modern javascript
