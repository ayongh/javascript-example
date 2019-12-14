var express = require('express');
var app = express();
var mongo = require('mongodb');


var url = "mongodb://localhost:27017/";


app.get('/mongo/create', function(request, result)
{
    mongo.connect(url,function(err,db)
    {
        if (err)
        {
            throw err;
        }

        var dbo = db.db("assignmet4DB");
        dbo. createCollection("customers", function(err, res)
        {
            if (err)
            {
                throw err;
            }
            db.close();

        })
        console.log("TEST DB is created");
    });

});

app.get('/insertdata', function(request, result)
{
    mongo.connect(url,function(err,db)
    {
        var inputCustomers = 
        [
            { name: "Nate", address: '123 Main Street'},
            { name: "James", address: '1834 South Charles'},
            { name: "Tupac", address: '222 Thugs Mansion Drive'},
            { name: "Fred", address: '5 Cavan Green Circle'},
            { name: "Cassie", address: '56 Riverside Avenue'}

        ];

        var dbo = db.db("assignmet4DB");

        dbo.collection("customers").insertMany(inputCustomers, function(err, res)
        {
            if(err) throw err;
            console.log("datas inserted");
            db.close();
        })

        console.log("Student collection created");
    });

});

app.get('/find', function(request, result)
{
    mongo.connect(url,function(err,db)
    {
        if (err)
        {
            throw err;
        }

        var dbo = db.db("assignmet4DB");

        var sort = {name:1}
        dbo. collection("customers").find().sort(sort).toArray(function(err, res)
        {
            if (err)
            {
                throw err;
            }
            console.log(res);
            db.close();

        })
        console.log("in find rounte");
        
    });

});

app.get('/update', function(request, result)
{
    mongo.connect(url,function(err,db)
    {
        if (err)
        {
            throw err;
        }

        var dbo = db.db("assignmet4DB");

        var query = {name: 'Cassie'}
        var update = {$set: {address: '1244 William Stree'}}
        dbo. collection("customers").updateMany(query,update ,function(err, res)
        {
            if (err)
            {
                throw err;
            }
            console.log("1 Document Updated");
            db.close();

        })
        console.log("in find rounte");
        
    });

});

app.get('/delete', function(request, result)
{
    mongo.connect(url,function(err,db)
    {
        if (err)
        {
            throw err;
        }

        var dbo = db.db("assignmet4DB");

        dbo. collection("customers").drop(function(err, res)
        {
            if (err)
            {
                throw err;
            }
            console.log("customer dropped");
            db.close();

        })
        console.log("in delet route");
        
    });

});




app.get('*', function(request, result)
{
    result.writeHead(206, {'Content-Type':'text/html'})
    result.end("<div style='width: 100%; text-align:center;'><h1 style='color:red'>404</h1><h2 style='color:red'>Content Not Found! </h2></div>");
});


app.listen(3001);