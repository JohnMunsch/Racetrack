angular.module('main', [])
    .controller('test', function () {
      this.users = [
        { name: 'john' },
        { name: 'paul' },
        { name: 'george' },
        { name: 'ringo' }
      ];
      this.parentVariable = 'This should not change';
    })
    .directive('users', function () {
      return {
        scope: {
          list: '='
        },
        controller: function () {
        },
        controllerAs: 'u',
        bindToController: true,
        template: '<div ng-repeat="user in u.list">' +
        '{{ user.name }}' +
        '</div>'
      }
    });
