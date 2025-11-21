
// TCP Echo Server 
// It is a server that listens for incoming TCP connections and echoes back any data it receives.

const net = require('net');

// Create a server
const server = net.createServer((socket) => {
console.log(' Client connected');

// socket is duplex: can read and write
socket.on('data', (data) => {
console.log(' Received:', data.toString());

// Echo back to client
socket.write(`You said: ${data}`);
});

socket.on('end', () => {
console.log('Client disconnected');
});
});

server.listen(3000, () => {
console.log(' Echo server running on port 3000');
});