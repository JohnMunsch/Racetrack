angular.module('Racetrack', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider
          .when('/', {
            templateUrl: '/views/main.html'
          })
          .when('/about', {
            templateUrl: '/views/about.html'
          })
          .otherwise('/');
    });