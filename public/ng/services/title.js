'use strict';

angular
  .module('app')
  .factory('title', function() {
    var self = {};
    self.text = 'Index';
    return self;
  });