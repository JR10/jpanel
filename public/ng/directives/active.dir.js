'use strict';

angular
  .module('app')
  .directive('jActive', ['$location', function($location) {
    return {
      restrict: 'A',
      replace: false,
      link: function(scope, e) {
        scope.$on('$routeChangeSuccess', function() {
          angular.forEach(e.find('a'), function(a) {
            a = angular.element(a);
            if (a.attr('href') === $location.path())
              a.parent().addClass('active');
            else
              a.parent().removeClass('active');
          });
        });
      }
    };
  }]);