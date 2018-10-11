http = require('http');
fs = require('fs');
var utils = require('./utils');
var generateWord = require('./generateWord');

server = http.createServer( function(req, res) {

    //console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var isJSON = false;
        req.on('data', function (data) {
			//console.log(utils.IsJsonString(data));
			if(utils.IsJsonString(data) == true){	
				generateWord.generateWord(JSON.parse(data));
				isJSON = true;
			}
		});
       
	   req.on('end', function () {
			if(isJSON === true){
				var obj = {
					type: 'SUCCESS',
					message: 'report generated with success.'
				}
				res.writeHead(200, {'Content-Type': 'application/json'});
				res.end(JSON.stringify(obj));
			}else{
				var obj = {
					type: 'ERROR',
					message: 'Only accept json object, do GET in same url for see structure object.'
				}
				res.writeHead(400, {'Content-Type': 'application/json'});
				res.end(JSON.stringify(obj));
			}
            //console.log(body);
        });
        
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:4321">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
       // var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'application/json'});
      		
		res.end(JSON.stringify(utils.objectExempleStructure(),0,3));
    }

});

port = 4321;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);