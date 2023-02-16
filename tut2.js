// # Node.Js Modules
// # FS Module -> File System Module

// # Import Module
const fs = require("fs");

// # Reading from file
let text = fs.readFileSync("Record.txt","utf-8");
console.log("The content of the file is: ");
console.log(text);

// # Writing in file
console.log("Creating a new file....");
text = text.replace("Node","Suraj");
console.log(text);
fs.writeFileSync("Suraj.txt",text);



