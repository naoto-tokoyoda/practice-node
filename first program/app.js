const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total memory: " + totalMemory);
console.log("Free memory: " + freeMemory);

//this is template string 
//ES6 / Es2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

