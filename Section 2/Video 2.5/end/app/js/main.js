angular.module('main', [])
    .controller('test', function ($scope) {
    })
    .directive('helmet', function () {
      return {
        scope: {
          helmetColor: '@'
        },
        templateUrl: 'img/helmet.svg',
        restrict: 'E'
      };
    });