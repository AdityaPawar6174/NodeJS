// Chatroom EventEmitter
// join(username)  --> user joined
// leave(username) --> user left
// sendMessage(username, message) --> username: message

const EventEmitter = require("events");

class Chatroom extends EventEmitter {
  join(username) {
    this.emit("userJoined", username);
  }

  leave(username) {
    this.emit("userLeft", username);
  }

  sendMessage(username, message) {
    this.emit("messageSent", username, message);
  }
}

const chatroom = new Chatroom();

chatroom.on("userJoined", (username) => {
  console.log(`${username} has joined...`);
});

chatroom.on("userLeft", (username) => {
  console.log(`${username} has left...`);
});

chatroom.on("messageSent", (username, message) => {
  console.log(`${username}: ${message}`);
});

chatroom.join("Aditya");
chatroom.sendMessage("Aditya", "Hello everyone!");
chatroom.join("Ujjwal");
chatroom.sendMessage("Ujjwal", "Hi Aditya!");
chatroom.leave("Aditya");
chatroom.sendMessage("Ujjwal", "Goodbye Aditya!");
