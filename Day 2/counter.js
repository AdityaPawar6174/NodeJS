let count = 0;

function increment() {
    count++;
    return count;
}

console.log("counter.js file is loaded");

module.exports = increment;