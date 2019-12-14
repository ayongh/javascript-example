var request = require('request');
var cheerio = require('cheerio');
var nodemailer = require('nodemailer');

var singer = new Array();
var song = new Array();

var temp  = new Array();
var index = 0;


if(process.argv.length > 2 )
{
    request('https://www.ranker.com/list/best-rap-songs-2019/ranker-music', function (error, response, html) 
    {
        if (!error && response.statusCode == 200) 
        {
            var $ = cheerio.load(html);
            // Not to be confused with forEach, this is jQuery
            $('span.listItem__props.block').each(function(i, element) 
            {
                singer[i] =  $(element).text();
            });

            // Not to be confused with forEach, this is jQuery
            $("a.listItem__title").each(function(i, element) 
            {
                song[i] = $(element).text();
            });
        }
        
        for (i = 2; i < process.argv.length; i++) 
        {  
            for(j=0; j<singer.length;j++)
            {
                var a = process.argv[i];

                if(singer[j].match(a) == process.argv[i])     
                {
                    temp[index] = 
                    {
                        song:song[j],
                        singer: singer[j]
                    }

                    index++;
                }
            }

        }


        if(temp.length > 0)
        {
            var upperString = 
            "<table style='font-family: arial, sans-serif;border-collapse: collapse;width: 100%;'>"+
                "<tr>"+
                    "<th style='border: 1px solid #dddddd;text-align: center;padding: 8px;'>Song</th>"+
                    "<th style='border: 1px solid #dddddd;text-align: center;padding: 8px;'>Singer</th>"+
                "</tr>";

            var content =" ";

            temp.forEach(function(element,i){
                content = 
                content
                +"<tr>"+
                "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;  font-style: italic;'>"+element.song+"</td>"+
                "<td style='border: 1px solid #dddddd;text-align: left;padding: 8px;  font-weight: bold;'>"+element.singer+"</td>"+
            "</tr>";
            })

            var end = "</table>"

                        
            var transporter = nodemailer.createTransport
            ({
                host: 'smtp.gmail.com',
                secure: true,
                port: 465,
                auth: 
                {
                    user: 'nodemailertestassign08@gmail.com',
                    pass: 'Abhishek12'
                }
            })

            var mailOptions = 
            {
                from: 'nodemailertestassign08@gmail.com',
                to: 'ayongh1@students.towson.edu',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!',
                html: upperString+content+end
            };

            transporter.sendMail(mailOptions, function(error, info)
            {
                if (error) 
                {
                    console.log(error);
                } 
                else 
                {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
        else
        {
            console.log("There is no singer found with that name")
        }
    });
}
else
{
    console.log("Enter Singer Name")
}