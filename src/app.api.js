var router = require('express').Router(),
    path   = require('path');

router.get('/config', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'config.json'));
});

module.exports = router;