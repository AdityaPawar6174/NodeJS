// to work with promises we need to import fs/promises module

const fs = require("fs/promises");
// OR
// const fs = require("fs").promises;

fs.readFile("./file1.txt", "utf-8")

  .then((data1) => {
    return fs.readFile("./file2.txt", "utf-8").then((data2) => {
      return fs.writeFile("final.txt", data1 + data2);
    });
  })

  .then(() => {
    console.log("Files combined successfully!");
  })

  .catch((err) => {
    console.error(err);
  });
