// TRANSFORM --> A stream that can modify or transform the data as it is being read or written.

const fs = require("fs");

const zlib = require("zlib"); // Import zlib for compression

const gzip = zlib.createGzip(); // Create a gzip transform stream


fs.createReadStream("input.txt") // Read from input.txt
    .pipe(gzip) // Pipe the read stream through the gzip transform stream
    .pipe(fs.createWriteStream("input.txt.gz")) // Write the compressed data to input.txt.gz
