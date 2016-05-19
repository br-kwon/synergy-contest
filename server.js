var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/submit', function(req, res) {

  var payLoad = req.body;

  console.log(payLoad);

});

// app.listen(process.env.PORT);
app.listen(3000);
