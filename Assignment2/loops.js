var fs = require('fs');
var sum = 0;

if (process.argv.length <= 3) 
{
    console.log("Formate Should follow: ");
    console.log("node File.js 1 2 3 4 5");
    process.exit(-1);
}

for(var a = 2; a < process.argv.length; a++)
{
    sum = sum + Number(process.argv[a]);
    console.log(process.argv[a]);

}

console.log(sum);

