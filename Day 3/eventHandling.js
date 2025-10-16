// Event Handling in Node.js

// Node js is built on the concept of event-driven architecture.
// that is the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs.

// Event - action or occurance
// Event Emitter Class/Object - module that facilitates the creation and handling of events

const EventEmitter = require('events'); // Importing the events module --> handling custom events

const myEmitter = new EventEmitter();



console.log("-----------------------------------------");



myEmitter.on('greet', () => {
    console.log('Hello, World!');
});

myEmitter.emit('greet'); // emit --> Trigger the event


myEmitter.on('greet' , () => {
    console.log('Hiiiii again...');
});

myEmitter.emit('greet'); // it will call both the listeners



console.log("-----------------------------------------");


// Event with parameters

myEmitter.on('greetUser', (name) => {
    console.log(`Hello, ${name}`);
});

myEmitter.emit('greetUser', 'Aditya');
myEmitter.emit('greetUser', 'Diksha');



console.log("-----------------------------------------");



// off --> to remove the listener

const listener = (name) => {
    console.log(`Hello, ${name}`);
};

myEmitter.on('greetting', listener);

myEmitter.emit('greetting', 'Aditya');

myEmitter.off('greetting', listener); // removing the listener

myEmitter.emit('greetting', 'Diksha'); // no output



console.log("-----------------------------------------");



// removeAllListeners --> to remove all the listeners for a specific event

const listener1 = (name) => {
    console.log(`Hello, ${name}`);
};

const listener2 = (name) => {
    console.log(`Welcome, ${name}`);
};

myEmitter.on('greetsss', listener1);
myEmitter.on('greetsss', listener2);

myEmitter.emit('greetsss', 'Aditya');

myEmitter.removeAllListeners('greetsss'); // removing all the listeners for 'greetsss' event

myEmitter.emit('greetsss', 'Diksha'); // no output



console.log("-----------------------------------------");



// once --> to register a one-time listener for the event

const x = function hello(name){
    console.log(`Hello ${name}`);
}

myEmitter.once('hello', x);

myEmitter.emit('hello', 'Aditya');
myEmitter.emit('hello', 'Aditya'); // no output
myEmitter.emit('hello', 'Diksha'); // no output



console.log("-----------------------------------------");


