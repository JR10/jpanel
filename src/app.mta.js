'use strict';

var config = require('../config'),
    server = require('mtasa-sdk')(config.mta.host, config.mta.port, config.mta.username, config.mta.password);

module.exports = server;