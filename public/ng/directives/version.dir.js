'use strict';

angular
  .module('app')
  .directive('jVersion', function() {
    return {
      restrict: 'E',
      template: '<span ng-bind="vm.version"></span>',
      controller: ['$http', function($http) {
        var self = this;
        $http
          .get('/api/version')
          .then(function(response) {
            self.version = response.data;
          });
      }],
      controllerAs: 'vm'
    };
  });