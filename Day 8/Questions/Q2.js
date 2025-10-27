// Write a program to handle divide by zero error using try catch And second one was for input error if input is not a number by using callbacks


function divide(a, b, callback){
    try {
        if(Number.isNaN(a) || Number.isNaN(b)){
            throw new Error("Input must be a number");
        }
        if(b === 0){
            throw new Error("Divide by zero error");
        }
        const result = a / b;
        callback(null, result);
    }
    catch (error) {
        callback(error.message, null);
    }
}

function division(err, result){
    if(err){
        console.log(`Error: ${err}`);
    } else {
        console.log(`Result: ${result}`);
    }
}


divide(10, 2, division)

divide(10, 0, division)

divide(10, "a", division)