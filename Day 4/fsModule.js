// fs module --> to interact with the file system on your machine

const fs = require("fs");

console.log("---------------------------------");

console.log("start");

// Reading data from file

// blocking code -- Synchronous code
let data = fs.readFileSync("./hello.txt", "utf-8");
console.log(data);

console.log("end");

// non-blocking code -- Asynchronous code
fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("end of file");

console.log("---------------------------------");

// writing data in file

fs.writeFile("file.txt", "this is the sample text file", (err) => {
  if (err) throw err;
  console.log("file created and Data written successfully");
});

console.log("----------------------------------");

// append data in file

fs.appendFile("file2.txt", "\nthis is the appended text", (err) => {
  if (err) throw err;
  console.log("Data appended successfully");
});

fs.appendFileSync(
  "file2.txt",
  "\nthis is the appended text using appendFileSync"
);

console.log("----------------------------------");

// open file

fs.open("file3.txt", "w", (err, file) => {
  if (err) {
    console.log("error opening a file", err);
    return;
  } else {
    console.log("file opened", file);
  }

  console.log("file opened successfully");

  fs.writeFile("file3.txt", "Welcome to Node.js", (err) => {
    if (err) throw err;
    console.log("Data written successfully in file3.txt");
  });
});

fs.openSync("file3.txt", "w");
console.log("file opened successfully");

console.log("----------------------------------");

