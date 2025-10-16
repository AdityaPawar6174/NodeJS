// Modules in Node.js

// Modules are like JavaScript libraries
// Modules are used to separate code into different files
// Each file is a module
// We can export functions, objects, or primitive values from a module
// We can import modules using require() function

const greet = require('./sample');
greet("Aditya");

// ---------------------------------------------------------

const math = require('./demo1/sample2')
console.log(
    math.double(2),
    math.triple(3),
    math.square(4)
);

// ----------------------------------------------------------

const increment = require('./counter');
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// console.log(require.cache); // shows the cached modules
delete require.cache[require.resolve('./counter')]; // delete the cache for counter module

const increment2 = require('./counter');
console.log(increment2());
console.log(increment2());
console.log(increment2());
console.log(increment2());
console.log(increment2());

console.log(require.cache); // shows the cached modules

// Note: Modules are cached after the first time they are loaded
// So, if we require the same module again, it will not be loaded again
// Instead, the cached version will be used

// To clear the cache, we can use delete require.cache[require.resolve('./counter')]
// But this is not recommended in production code