var fs = require("fs");

fs.writeFile("hello.txt", "Hello, Shashank!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully.");
  }
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File contents:", data);
  }
});

fs.appendFile("hello.txt", "\nWelcome to Node.js file handling.", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
  } else {
    console.log("Content appended successfully.");
  }
});

fs.unlink("hello.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully.");
  }
});

//Promises version:

var fs = require("fs").promises;

async function run() {
  try {
    //write to file
    await fs.writeFile("greet.txt", "Hi Shashank!");
    console.log("File written successfully.");

    //read file content
    const text = await fs.readFile("greet.txt", "utf8");
    console.log("File contents:", text);

    //append to file
    await fs.appendFile("greet.txt", "\nThis is an appended line.");
    console.log("Content appended successfully.");

    //delete file
    await fs.unlink("greet.txt");
    console.log("File deleted successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
