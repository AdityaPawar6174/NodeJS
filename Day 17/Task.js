// TASK
// organize the files by extension
const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");

const folderPath = "./myfolder";

async function organizeFiles() {
  try {
    const files = await fsp.readdir(folderPath);

    for (const file of files) {
      const ext = path.extname(file);
      if (!ext) continue;

      let folderName = ext.replace(".", "");

      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        folderName = "images";
      } else if ([".doc"].includes(ext)) {
        folderName = "docs";
      }

      const targetFolder = path.join(folderPath, folderName);
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(targetFolder, file);
      if (!fs.existsSync(targetFolder)) {
        await fsp.mkdir(targetFolder);
      }
      await fsp.rename(oldPath, newPath);

      console.log(`Moved: ${file} → ${folderName}/`);
    }

    console.log("All files organized");
  } catch (error) {
    console.error("Error:", error);
  }
}

organizeFiles();
