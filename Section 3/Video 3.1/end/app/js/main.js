angular.module('main', [])
    .directive('demo', function ($log) {
      return {
        scope: {
          label: '@'
        },
        controller: function ($scope) {
          $log.log($scope.label, 'controller');
        },
        link: function postLink(scope, element, attrs, controller) {
          $log.log(scope.label, 'postLink');
        },
        transclude: true,
        template: '<div>{{ label }}<ng-transclude></ng-transclude></div>'
      };
    });
