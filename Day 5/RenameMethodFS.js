
// callback based file rename example

const fs = require("fs");

fs.rename("demo.txt", "renamed_demo.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File renamed successfully");
  }
});


// removing a file using callback

fs.unlink("renamed_demo.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});