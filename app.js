var http = require('http');
var express = require('express');
var db = require('./model');

var app = express();

app.route('/secrets')
  .get(function(req, res) {
    db.Secret.find(function (err, secrets) {
      if (err) console.error(err);
      return res.json(JSON.stringify(secrets));
    })
  })
  .post(function(req, res) {
    console.log('post the shame.');
  });

app.route('/secrets/:id')
  .get(function(req, res) {
    db.Secret.find({'_id': req.params.id}, function(err, secret) {
      if (err) console.error(err);
      return res.json(JSON.stringify(secret));
    })
  });

app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('*', function(req, res) {
    res.send('404: all of the things are belong to us.');
});

var server = app.listen('9001', function() {
  console.log('It\'s over 9000 and Listening on port %d', server.address().port);
});
