// Requires
var express    = require('express');
var app        = express();
var path       = require('path');

var port = process.env.PORT || 8080;

var dir2048 = path.join(__dirname, '..', '2048');

app.use('/js',    express.static(path.join(dir2048, 'js')));
app.use('/style', express.static(path.join(dir2048, 'style')));

app.get('/', function(req, res) {
  console.log("Serving 2048's index.html");
  res.sendFile(path.join(dir2048, 'index.html'));
});

app.listen(port);
console.log('Listening on port ' + port + '.');
