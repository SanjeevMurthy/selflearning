var bodyParser      = require('body-parser');
var express         = require('express');
var RequestProfiler = require('./request-profiler');
var app             = express();

// Allow reading of post data
app.use(bodyParser.json());

// Routes
app.use(RequestProfiler.profile());

// Routes
app.use('/', function(req, res, next) {
  res.send('hello');
});

// 404s
app.use(function(req, res) {
  res.status(404).json({
    message: '404 Not found'
  });
});

// Other errors
app.use(function(err, req, res) {
  res.status(500).json({error: err});
});


var server = app.listen(3000, function() {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Running in ' + process.env.NODE_ENV +  ' environment');
  console.log('Node app listening at http://%s:%s', host, port);
});
