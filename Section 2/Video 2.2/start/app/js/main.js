angular.module('main', [])
    .controller('test', function ($scope) {
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