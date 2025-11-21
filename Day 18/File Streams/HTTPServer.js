// HTTPServer - A simple HTTP server that streams the contents of 'input.txt' to the client

const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const stream = fs.createReadStream('input.txt');
    stream.pipe(res);
}).listen(3000)

console.log('HTTP Server is running on http://localhost:3000');