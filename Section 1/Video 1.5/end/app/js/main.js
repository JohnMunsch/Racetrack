angular.module('Racetrack', [])
    .controller('MainController', function ($scope) {
      $scope.helmetColor = 'red';
    })
    .directive('helmet', function () {
      return {
        scope: {
          helmetColor: '=?'
        },
        templateUrl: 'img/helmet.svg',
        link: function (scope) {
          scope.helmetColor = 'green';
        }
      };
    });
