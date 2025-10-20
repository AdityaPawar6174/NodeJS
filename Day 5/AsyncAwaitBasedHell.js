
// Async/Await Based Example

const fs = require('fs').promises;

async function mergeFiles() {
    
    try {
        const data1 = await fs.readFile("./file1.txt", "utf-8");
        const data2 = await fs.readFile("./file2.txt", "utf-8");

        await fs.writeFile("final.txt", data1 + data2);
        console.log("Files combined successfully!");
    }
    catch (err) {
        console.error(err);
    }
}

mergeFiles();