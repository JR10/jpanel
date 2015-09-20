var express = require('express'),
    morgan  = require('morgan'),
    debug   = require('debug')('blue:server'),
    path    = require('path'),
    favicon = require('serve-favicon');

var port = 3000; // TEMP

var app = express();
require('http')
  .Server(app)
  .listen(port)
  .on('listening', function() {
    debug('Server started listening on '+port);
  })
  .on('error', function(error) {
    throw error;
  });