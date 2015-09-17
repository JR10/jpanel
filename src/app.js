'use strict';

var express = require('express'),
    morgan  = require('morgan'),
    debug   = require('debug')('jpanel:server'),
    path    = require('path'),
    favicon = require('serve-favicon');

var port = 3000; // TEMP

var app = express();
require('http')
  .Server(app)
  .on('listening', function() {
    debug('Server started listening on '+port);
  })
  .on('error', function(error) {
    throw error;
  })
  .listen(port);

app.use(favicon(path.join(__dirname, '..', 'public', 'files', 'favicon.ico')));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));