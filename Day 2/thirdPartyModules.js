
// Importing the chalk module to add colors to console output

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold('Error!'));
console.log(chalk.green.bold('Success!'));
console.log(chalk.yellow.underline('Warning!'));


// axios - A promise-based HTTP client for the browser and Node.js

const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchUserData() {
    try {
        const response = await axios.get(url);
        console.log('User Data:', response.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchUserData();