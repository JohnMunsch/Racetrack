angular.module('main', [])
    .directive('demo', function ($log) {
      return {
        scope: {
          label: '@'
        },
        transclude: true,
        template: '<div>{{ label }}<ng-transclude></ng-transclude></div>'
      };
    });
