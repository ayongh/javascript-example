var express = require('express');
var app = express();

var url = require('url');
var path = require('path');


app.get('/api/parsetime', function(request, result)
{

    if (request.query.iso != undefined)
    {
        var parsedURL = url.parse(request.url, true);

        var isoDnT = parsedURL.query.iso;
        var time = isoDnT.slice(isoDnT.indexOf('T')+1,isoDnT.indexOf("."));
        var timeArr = time.split(":");

        var jsonString = 
        {
            hour: parseInt(timeArr[0]),
            minute: parseInt(timeArr[1]),
            secound: parseInt(timeArr[2])
        };

        result.writeHead(200, {'Content-Type':'application/json'})
        result.end(JSON.stringify(jsonString));
        console.log("Request Made: "+request.url + " Success");
    }
    else
    {
        var jsonString = 
        {
            
            message: "There is no ISO data"
        };

        result.writeHead(206, {'Content-Type':'application/json'})
        result.end(JSON.stringify(jsonString));
    }

    console.log(parsedURL);
});

app.get('/api/unixtime', function(request, result)
{
    if (request.query.iso != undefined)
    {
        var parsedURL = url.parse(request.url, true);
        var unixvalue = 0;
        var isoDnT = new Date(parsedURL.query.iso);
        
        unixvalue = isoDnT.valueOf();

        var jsonString = 
        {
            unixTime: unixvalue
        };

        result.writeHead(200, {'Content-Type':'application/json'})
        result.end(JSON.stringify(jsonString));
        console.log("Request Made: "+request.url + " Success");
       
    }
    else
    {
        var jsonString = 
        {
            
            message: "There is no ISO data"
        };

        result.writeHead(206, {'Content-Type':'application/json'})
        result.end(JSON.stringify(jsonString));
    }

});

app.get('*', function(request, result)
{
    result.writeHead(206, {'Content-Type':'text/html'})
    result.end("<div style='width: 100%; text-align:center;'><h1 style='color:red'>404</h1><h2 style='color:red'>Content Not Found! </h2></div>");
});


app.listen(3000);