// simple user login notification system
// 'userLoggedIn' event username, age, city and current time

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('userLoggedIn', (username, age, city, time) => {
    console.log(`User ${username} logged in. Age: ${age}, City: ${city}, Time: ${time}`);
});

eventEmitter.emit('userLoggedIn', 'Aditya', 22, 'Nashik', new Date().toLocaleString());

console.log("-------------------");