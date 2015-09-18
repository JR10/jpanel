'use strict';

angular
  .module('app')
  .controller('TitleCtrl', ['title', function(title) {
    this.get = title.get;
  }]);