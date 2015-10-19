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

var http = require('http').Server(app);
var socket2048 = require('./socket2048.js')(http);
var core2048 = require('./core2048.js');

http.listen(port, function() {
  console.log('Listening on port ' + port + '.');

  new core2048.GameManager(4, socket2048.inputManager, socket2048.actuator, socket2048.storageManager);
});
