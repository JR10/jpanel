'use strict';

angular
  .module('app')
  .controller('TitleCtrl', ['title', function(title) {
    this.title = title;
  }]);