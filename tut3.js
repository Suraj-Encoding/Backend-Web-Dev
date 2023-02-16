// # Blocking vs Non-Blocking Execution/code 

// # Synchronous or Blocking
// - Line By Line Execution
// - Example: readFileSync(path,encoding);

// # Asynchronous or Non-Blocking
// - Line By Line Execution is not guarenteed
// - callbacks will fire
// - Example: readFile(path,encoding,callback);

const fs = require("fs");
// Error will occured due to path i.e file name
// fs.readFile("Recford.txt","utf-8",(err,data)=>{
fs.readFile("Record.txt","utf-8",(err,data)=>{
     console.log(err,data);
     console.log(err);
     console.log(data);
});
console.log("This is a message...");
// err  - error if occured (err = null -> otherwise)
// data - content of the file


