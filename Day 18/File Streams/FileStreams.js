// Streams readable writable duplex transform

// STREAMS -- are used to read or write data piece by piece
// instead of reading or writing the entire data at once
// This is useful when working with large files or data
// because it reduces the memory consumption and increases the performance

// So in this file we will see how to use file streams in node js
// 1. Readable Stream --> to read data from a file
// 2. Writable Stream --> to write data to a file
// 3. Duplex Stream --> to read and write data to a file
// 4. Transform Stream --> to modify or transform the data while reading or writing

const fs = require("fs");

// Creating a readable stream
const readableStream = fs.createReadStream("input.txt", {
    encoding: "utf-8",
    highWaterMark: 16 // size of each chunk
});


// Reading data from readable stream
readableStream.on("data", (chunk) => {
    console.log("Chunk Received: ", chunk);
});

readableStream.on("end", () => {
    console.log("Reading finished");
});

readableStream.on("error", (err) => {
    console.error("Error while reading:", err);
});

// writable stream
const writableStream = fs.createWriteStream("output.txt");

// Writing data to writable stream
writableStream.write("Hello, this is a writable stream example.\n");
writableStream.write("Writing data in chunks to the output file.\n");
writableStream.end("This is the end of the writable stream.\n");

writableStream.on("finish", () => {
    console.log("Writing finished");
});