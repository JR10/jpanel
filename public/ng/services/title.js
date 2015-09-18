'use strict';

angular
  .module('app')
  .factory('title', function() {
    var title = 'Index';
    return {
      get: function() { return title; },
      set: function(newTitle) { title = newTitle; }
    }; 
  });