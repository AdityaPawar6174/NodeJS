// error --> It is an unwanted or unexpected event that occurs during the execution of a program, disrupting its normal flow.

    // Types of errors:
    // 1. programmatic errors --> 
                    // compile time errors / syntax errors
                    // runtime errors / logical errors / exceptions
    // 2. operational errors --> external factors like network failure, disk full, Database connectivity issues etc.
    // 3. functional errors --> when a function does not perform as intended / Domain errors


// Handling --> It is the process of managing errors in a controlled manner to prevent program crashes and ensure smooth execution.


// NodeJS Error Handling Mechanisms:
    
    // 1. Use error Objects
    const err = new Error('This is an error message'); // Create an error object
    console.log(err.message); // Access the error message

    console.log(err.stack); // Access the error stack trace

    throw new Error('Throwing an error'); // Throw an error


    // 2. Custom error
    export class CustomError extends Error{
        constructor(message)
        {
            super(message);
        }
    }


    // 3. Try...Catch...Finally Blocks
    try {
        console.log("Everything is fine");
        
    } catch (error) {
        console.log("Error Occured", error.message);
    }


    // 4. Callback Functions
    function task(cb) {
        setTimeout(() => {
            cb("Hello")
        }, 0);
    }

    task((err, data) => {
        if (err) throw err; 
        else {
            console.log("Data:", data);
        }
    })


    // 5. Process.on --> register event listeners
        // arguments - (event name, listener function)
    
    function doSomething(){
        console.log("Hello");
    }

    process.on('uncaughtException', (e) => {
        console.log("there is an error", e.message);
        process.exit(1);
    })
    
    doSomething();


    // 6. Promises 
        // (resolve, reject) => {}

    const promise = new Promise((resolve, reject) => {
        if(true) {
            resolve("Yesss...Program is Working Fine!!!");
        }
        else {
            reject("There is an error in the program");
        }
    })

    promise.then((msg) => {
        console.log(msg);
    }).catch((err) => {
        console.log(err);
    });
