
//file System required lib
var fs = require('fs');

//reading from the file test.txt
var contents = fs.readFileSync(process.argv[2]).toString();

var a  = contents.split('\n');

console.log(a);
console.log("There are "+a.length +" lines in the "+process.argv[2]);
