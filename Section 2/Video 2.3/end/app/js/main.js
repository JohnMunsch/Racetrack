angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.appName = 'Learning AngularJS Directives';
    })
    .directive('pictureFrame', function () {
      return {
        transclude: true,
        template: '<div class="pF" ng-transclude></div>'
      };
    });