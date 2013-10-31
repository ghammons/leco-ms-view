var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.sendfile('./MassSiteHTML.html');
});

app.get('/api', function(request, response) {
	response.send({name: "Raymond", age: 40});
});

app.listen(3000);