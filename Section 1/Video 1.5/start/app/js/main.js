angular.module('Racetrack', [])
    .controller('MainController', function ($scope) {
      $scope.helmetColor = 'red';
    })
    .directive('helmet', function () {
      return {
        scope: {
        },
        templateUrl: 'img/helmet.svg'
      };
    });
