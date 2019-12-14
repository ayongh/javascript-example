var fs = require('fs');

if (process.argv.length <= 3) 
{
    console.log("node File.js path/to/directory File_EXT");
    process.exit(-1);
}

var path = process.argv[2];
var c=0;
fs.readdir(path, function(err, items) 
{
    for(var a = 0; a<items.length; a++)
    {
        if(items[a].includes(process.argv[3]))
        {
            console.log("-----------------File # "+ items[a] +"--------------------");
            var contents = fs.readFileSync(items[a]).toString();
            console.log(contents);
        }
    }
});