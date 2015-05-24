angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.clicked = function (color) {
        alert('clicked: ' + color);
      };
    })
    .directive('helmet', function () {
      return {
        scope: {
          helmetColor: '@',
          helmetClick: '&'
        },
        link: function (scope, element, attrs) {
          scope.functionProvided = false;

          if (attrs.helmetClick != undefined) {
            scope.functionProvided = true;
          }
        },
        templateUrl: 'img/helmet.svg'
      };
    });