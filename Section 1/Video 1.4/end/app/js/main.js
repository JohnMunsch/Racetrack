angular.module('Racetrack', [])
    .controller('MainController', function ($scope) {
      $scope.appName = 'Learning AngularJS Directives';

      $scope.helmetColor = 'red';
    })
    .directive('helloWorld', function () {
      return {
        scope: {
          // stringVar: '@',
          // expressionVar: '=',
          // functionVar: '&',
          //
          // optionalVar: '=?'
          appName: '@applicationName'
        },
        template: '<div>{{ appName }}</div>'
      };
    })
    .directive('helmet', function () {
      return {
        templateUrl: 'img/helmet.svg'
      };
    });
