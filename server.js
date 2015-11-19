var express = require('express');

var server = express();
server.use(express.static(__dirname + '/angularjs'));

var port = 5000;

server.listen(port,function(){
	console.log('server listening on port ' + port);
});