
// Core Modules in Node.js
// Core modules are built-in modules that come with Node.js
// We can use them without installing any additional packages

// Some commonly used core modules are:

// 1. os module - provides operating system-related utility methods and properties
const os = require('os');

console.log("=== Operating System Information ===");
console.log("Type:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory (MB):", (os.totalmem() / (1024 * 1024)).toFixed(2));
console.log("Free Memory (MB):", (os.freemem() / (1024 * 1024)).toFixed(2));
console.log("Uptime (seconds):", os.uptime());
console.log(os.type());

// 2. fs module - provides an API for interacting with the file system
const fs = require('fs');

console.log("\n=== File System Operations ===");


fs.writeFileSync('example.txt', 'Hello, Node.js!'); // Create a file
const data = fs.readFileSync('example.txt', 'utf8'); // Read the file
console.log("File Content:", data);
fs.appendFileSync('example.txt', '\nAppended Text --> this is awesome!'); // Append to the file
const updatedData = fs.readFileSync('example.txt', 'utf8');
console.log("Updated File Content:", updatedData);
fs.unlinkSync('example.txt'); // Delete the file
console.log("File deleted.");


// 3. http module - allows Node.js to transfer data over HTTP
const http = require('http');

console.log("\n=== Simple HTTP Server ===");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

