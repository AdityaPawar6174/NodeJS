// PIPING --> It is connecting two or more streams together

const fs = require("fs");

fs.createReadStream("input.txt")
.pipe(fs.createWriteStream("sample.txt")); // piping is the process of taking data from one stream and passing it to another stream

console.log("Piping Completed");

// backpressure --> when the writable stream is slower than the readable stream

