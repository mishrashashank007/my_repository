const fs = require("fs/promises");
const path = require("path");
const PORT = 4000;

async function fileInspector() {
  const folder = path.join(__dirname, "myData");

  //1.create folder
  await fs.mkdir(folder, { recursive: true });

  //2.create files
  await fs.writeFile(path.join(folder, "a.txt"), "hello");
  await fs.writeFile(path.join(folder, "b.txt"), "world");
  await fs.writeFile(path.join(folder, "c.png"), "sample image");
  await fs.writeFile(path.join(folder, "notes.txt"), "here is a note");

  //3.list all files in the folder
  const files = await fs.readdir(folder);
  console.log("\n List Of All files:", files);

  //4.show total no. of files, size of all files and filter .txt files
  let textFiles = 0;
  for (let file of files) {
    const filePath = path.join(folder, file);
    const stats = await fs.stat(filePath);
    console.log(`File: ${file}, Size: ${stats.size} bytes`);

    //filter .txt files
    if (file.endsWith(".txt")) {
      textFiles++;
    }
            //OR
    // if (path.extname(file) === '.txt') {
    //     textFiles++;
    // }
  }
  // 5. Print total .txt files
  console.log(`\n Total .txt files = ${textFiles}`);
}

fileInspector();
