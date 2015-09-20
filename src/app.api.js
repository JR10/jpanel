'use strict';

var router = require('express').Router(),
    path   = require('path');

var pkg = require('./../package');

router.get('/config', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'config.json'));
});

router.get('/version', function(req, res) {
  res.end(pkg.version);
});

module.exports = router;