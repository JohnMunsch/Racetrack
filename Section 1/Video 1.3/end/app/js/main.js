angular.module('Racetrack', [])
    .controller('MainController', function ($scope) {
      $scope.appName = 'Learning AngularJS Directives';
    })
    .directive('helloWorld', function () {
      return {
        template: '<div>{{ appName }}</div>'
      };
    })
    .directive('helmet', function () {
      return {
        templateUrl: 'img/helmet.svg'
      };
    });
