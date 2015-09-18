'use strict';

angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'ng/views/home.html', controller: 'HomeCtrl'})
      .otherwise({redirectTo: '/404'});
    $locationProvider.html5Mode(true);
  }]);