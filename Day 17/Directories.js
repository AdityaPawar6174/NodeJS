// NodeJS File/Directory Operations

// 1. synchronous program to check dir
const fs = require("fs");
const dir1 = "./test.js";
try {
  if (fs.existsSync(dir1)) {
    console.log("Directory exist");
  } else {
    console.log("Directory not exists");
  }
} catch (err) {
  console.error(err);
}

// 2. promise based program to check dir
const fs = require("fs");
const fsp = require("fs").promises;
const dir2 = "./test1.js";
(async () => {
  try {
    await fsp.access(dir2, fs.constants.F_OK);
    console.log("direc exist");
  } catch (err) {
    console.log("directory not exists");
  }
})();

// 3. create nested directory
const fs = require("fs");
const fsp = require("fs").promises;
const dir3 = "./a";
try {
  fs.mkdirSync("./b/c/d", { recursive: true });
  console.log("nested direc created");
} catch (err) {
  if (err.code == "EXISTS") console.log("already exits");
  else {
    console.log("error");
  }
}

// 4. create dir by using async await
const fs = require("fs");
const fsp = require("fs").promises;
(async () => {
  try {
    await fsp.mkdir("./a1/b1/c1", { recursive: true });
    console.log("created");
  } catch (err) {
    console.log("err");
  }
})();

// 5. reading file Synchronously
const fs = require("fs");
// const fsp = require('fs').promises;
const dir5 = "./a";
try {
  const items = fs.readdirSync(dir5, { withFileTypes: true });
  for (const entry of items) {
    if (entry.isDirectory()) console.log("[DIR]]", entry.name);
    else if (entry.isFile()) console.log("[FILE]]", entry.name);
    else console.log("other");
  }
} catch (err) {
  console.log(err);
}

// 6. reading file by using async and await
const fs = require("fs");
const fsp = require("fs").promises;
const dir6 = "./a";
(async () => {
  try {
    const items = await fsp.readdir(dir6, { withFileTypes: true });

    for (const entry of items) {
      if (entry.isDirectory()) console.log("[DIR]]", entry.name);
      else if (entry.isFile()) console.log("[FILE]]", entry.name);
      else console.log("other");
    }
  } catch (err) {
    console.log(err);
  }
})();

// 7. file stats
const fs = require("fs");
// const fsp = require('fs').promises;
const dir7 = "./a";
try {
  const stats = fs.statSync(dir7);
  console.log(
    "isFile:",
    stats.isFile(),
    "isDIR:",
    stats.isDirectory(),
    "size: ",
    stats.size
  );
} catch (err) {
  console.log("err");
}

// 8. remove the direc
const fs = require("fs");
//const fsp = require('fs').promises;
const dir8 = "./test.js";
try {
  fs.rmdirSync(dir);
  console.log("removed");
} catch (err) {
  console.log("cant remove :", err);
}

// 9. remove file
const fs = require("fs");
// const fsp = require('fs').promises;
const dir9 = "./a";
try {
  fs.rmSync(dir9, { recursive: true, force: true });
  console.log("removed");
} catch (err) {
  console.log("cant remove :", err);
}

// 10. remove file async and await
const fs = require("fs");
const fsp = require("fs").promises;
const dir10 = "./test1.js";
async () => {
  try {
    await fsp.rm(dir10, { recursive: true, force: true });
    console.log("removed");
  } catch (err) {
    console.log("cant remove :", err);
  }
};

// 11. copying directory synchronously
const fs = require("fs");
// const fsp = require('fs').promises;
const source1 = "./a";
const dest1 = "./d";
try {
  fs.cpSync(source1, dest1, { recursive: true });
  console.log("copied");
} catch (err) {
  console.log("cant copy :", err);
}

// 12. copying by using async and await
const fs = require("fs");

const source2 = "./a";
const dest2 = "./desti";

(async () => {
  try {
    fs.cp(source2, dest2, { recursive: true }, (err) => {
      if (err) {
        console.log("Copy failed:", err);
      } else {
        console.log("Copied successfully!");
      }
    });
  } catch (err) {
    console.log("Error:", err);
  }
})();

// 13. rename directory
const fs = require("fs");
const fsp = require("fs").promises;

async function safeRename(oldName, newName) {
  try {
    await fsp.access(oldName); // checks folder exists
    await fsp.rename(oldName, newName);
    console.log("Renamed");
  } catch (err) {
    console.error("Error:", err);
  }
}

safeRename("./desti", "./d");

// 14. file path operations
const path = require("path");
const finalPath = path.join("folder", "subfolder", "file.txt");
console.log(finalPath);

// file paths \ /
const path = require("path");
const absPath = path.resolve("folder", "subfolder", "file.txt");
console.log(absPath);

const path = require("path");
const file1 = path.extname("17.txt,");
console.log(file1);

const path = require("path");
const file2 = path.parse("Day17-19\\17.txt");
console.log(file2);

const path = require("path");
const newPath = path.format({
  root: "",
  dir: "",
  base: "Day17-19\x0F.txt",
  ext: ".txt",
  name: "Day17-19\x0F",
});
console.log(newPath);

