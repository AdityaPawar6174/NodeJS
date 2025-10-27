// Write a program to handle divide by zero error using try catch And second one was for input error if input is not a number by using Promises

function divide(a, b){
    return new Promise((resolve, reject) => {
        try {
            let isNum = Number.isInteger(a) && Number.isInteger(b);
            if(!isNum){
                reject("Input must be a number");
            }
            if(b === 0){
                reject("Divide by zero error");
            }
            const result = a / b;
            resolve(result);
        }
        catch (error) {
            reject(error.message);
        }
    });
}

divide(10, 2)
    .then(result => console.log(`Result: ${result}`))
    .catch(err => console.log(`Error: ${err}`));

divide(10, 0)
    .then(result => console.log(`Result: ${result}`))
    .catch(err => console.log(`Error: ${err}`));

divide(10, "a")
    .then(result => console.log(`Result: ${result}`))
    .catch(err => console.log(`Error: ${err}`));