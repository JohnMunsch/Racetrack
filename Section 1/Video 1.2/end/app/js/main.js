angular.module('Racetrack', [ ])
    .controller('MainController', function () {
    })
    .directive('helmet', function () {
      return {
        scope: {
          color: '@'
        },
        templateUrl: 'img/helmet.svg'
      };
    });