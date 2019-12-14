//file System required lib
var fs = require('fs');


fs.readFile(process.argv[2], function(err, data) 
{
    var a = data.toString().split('\n');
    console.log(a);
    console.log(err);

    console.log("There are "+a.length +" lines in the "+process.argv[2]);
});