
// Renaming and Deleting a file using fs module with promises and async/await

const fs = require("fs").promises;

async function renameDeleteFile() {

    try {
        await fs.rename("demo.txt", "renamed_demo.txt");
        console.log("File renamed successfully");

        await fs.unlink("renamed_demo.txt");
        console.log("File deleted successfully");
    } catch (err) {
        console.log(err);
    }  
}

renameDeleteFile();