'use strict';

var express = require('express'),
    morgan  = require('morgan'),
    debug   = require('debug')('jpanel:server'),
    path    = require('path'),
    favicon = require('serve-favicon');

var config = require('../config');

var app = express();
require('http')
  .Server(app)
  .on('error', function(error) {
    throw error;
  })
  .listen(config.webserver.port || 3000, function() {
    debug('Server started listening on '+ config.webserver.port);
  });

app.use(favicon(path.join(__dirname, '..', 'public', 'files', 'favicon.ico')));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', require('./app.api'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});