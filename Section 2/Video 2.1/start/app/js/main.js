angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.list = [
        { name: 'john' },
        { name: 'paul' },
        { name: 'george' },
        { name: 'ringo' }
      ];
      $scope.parentVariable = 'This should not change';
    })
    .directive('users', function () {
      return {
        scope: {
          list: '='
        },
        link: function (scope) {
          // scope.parentVariable = 'something other than test';
        },
        template: '<div ng-repeat="user in list">' +
                     '{{ user.name }}' +
                  '</div>' +
                  '<p>{{ parentVariable }}</p>'
      };
    });
