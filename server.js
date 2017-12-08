var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'build'), {
	extensions: ['html']
}));

// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/about', function(req, res) {
	res.sendFile(path.join(__dirname + '/build/about.html'));
});

app.listen(8888);

// Production server
// viewed at http://localhost:8888
