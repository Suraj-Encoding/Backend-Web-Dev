// # Other File - 'index.js'
// # Here we import our external modules
// # From 'mod.js' file we export those modules

// # Import modules

// const mod = require("./mod");  // console.log only
// console.log(mod); // not export - {}
// console.log(mod); // export - [function:average]

// # Error will occur
// const mod = require("./mod"); 
// console.log(mod.average([3,4,5]));

// # Perfect Run
// const average = require("./mod"); 
// console.log(average([3,4,5]));

// # Getting object via import - so now 'mod' is an object here
const mod = require("./mod"); 
// # value of mod..?
//   mod = {
//     avg: average,
//     name: "Suraj",
//     repo: "Github" 
//   }
console.log(mod.avg([3,4,5]));
console.log(mod.name);
console.log(mod.repo);

// # Get object - mod = module.exports -> mod.name = TOPPER
// const mod = require("./mod"); 
// console.log(mod.name);

console.log("This is index.js");


// # Note:  1. You can use mod or mod.js both are correct.
//          2. './mod' OR  "./mod" both are correct.
//          3. We import modules and we get only console.log statement but
//             We don't get average function so for that we have to export that function from mod.js