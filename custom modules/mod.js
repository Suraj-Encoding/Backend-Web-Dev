// # Custom Modules OR External Modules

console.log("This is modules");
// # Average Function
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// # call average
// let res = average([3,4,5]);
// console.log("Average is:",res);

// # Export the function average
// module.exports = average;

// # Export multiple things via object
module.exports = {
    avg: average,
    name: "Suraj",
    repo: "Github" 
}

// # 'module.exports' - is itself an object 
// module.exports.name = "TOPPER";


//                      # NOTE #
// # In Node.Js we have to explicitly mention those functios, classes and objects which we have to export.
// # For function, classes and objects - We have to explicitly exports those.
// # For console.log() no need to export.
// # Here average function is not accessible so we have to export it.

          