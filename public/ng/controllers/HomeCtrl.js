'use strict';

angular
  .module('app')
  .controller('HomeCtrl', ['title', function(title) {
    title.text = 'Home';
  }]);