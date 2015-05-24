angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.appName = 'Learning AngularJS Directives';
    })
    .directive('pictureFrame', function () {
      return {
        template: '<div class="pF"></div>'
      };
    });