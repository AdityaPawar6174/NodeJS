// Write a program to handle divide by zero error using try catch And second one was for input error if input is not a number

function divide(a, b){
    try {
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Input must be a number");
        }
        if(b === 0){
            throw new Error("Divide by zero error");
        }
        return a / b;
    }
    catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(divide(10, "a"));