// Write a program to handle divide by zero error using try catch And second one was for input error if input is not a number by using Process.on

function divide(a, b){
    try {
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Input must be a number");
        }
        if(b === 0){
            throw new Error("Divide by zero error");
        }
        const result = a / b;
        console.log(`Result: ${result}`);
    }
    catch (error) {
        throw error;
    }
}

process.on('uncaughtException', (e) => {
    console.log("Error: ", e.message);
    process.exit(1);
});

divide(10, 2);
divide(10, 0);
divide(10, "a");
