
var http = require('http');

var db = 
{
    products : 
    [
        {
        id : 1,   
	 Name : "Mobiles",
            Brand : "Apple",
            Price : 50000
        },
        {
	    id : 2,
            Name : "Laptops",
            Brand : "HP",
            Price : 75000
        },
        {
            id : 3,
	    Name : "Desktop",
            Brand : "Dell",
            Price : 25000
        }
    ]
};

http.createServer(function (req, res) 
{
    if(req.url == "/products" && req.method == "GET")
    {
        res.writeHead(
            200, 
            {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }); 
        
        res.end( JSON.stringify(db.products) );
    }
    else if(req.url == "/products" && req.method == "OPTIONS")
    {
        res.setHeader(
            "Access-Control-Allow-Origin", 
            "*"
        );

        res.setHeader(
            "Access-Control-Allow-Headers", 
            "Origin, X-Requested-With, Content-Type, Accept"
        );

        res.end();
    }
    else if(req.url == "/products" && req.method == "POST")
    {
        var rawData = "";

        req.on(
            "data",
            function postedData(chunk)
            {
                rawData = rawData + chunk;
            }
        )

        req.on(
            "end",
            function()
            {
                //console.log(rawData);
                var newProduct = JSON.parse(rawData);
                db.products.push(newProduct);
                res.setHeader(
                    "Access-Control-Allow-Origin", 
                    "*"
                );
        
                res.setHeader(
                    "Access-Control-Allow-Headers", 
                    "Origin, X-Requested-With, Content-Type, Accept"
                );
                res.end();              
            }
        )

    }
    else
    {
        res.writeHead(404);
        res.end();
    }

}).listen(90, '127.0.0.1'); // 127.0.0.1 = localhost

console.log('JSON Server @ http://127.0.0.1:90');
