angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.damage = {
        remaining: 3,
        max: 5
      };
      $scope.clicked = function () {
        alert('clicked');
      };
    })
    .directive('helmet', function () {
      return {
        scope: {
          helmetColor: '@'
        },
        templateUrl: 'img/helmet.svg'
      };
    });