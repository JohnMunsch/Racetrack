angular.module('main', [])
    .controller('test', function ($scope) {
      $scope.damage = {
        remaining: 3,
        max: 5
      };
      $scope.clicked = function () {
        alert('clicked');
      };
    })
    .directive('playerUi', function () {
      return {
        transclude: true,
        template: '<div class="player-ui">' +
                     '<helmet></helmet>' +
                     '<div class="ui-controls">' +
                        '<ng-transclude></ng-transclude>' +
                     '</div>' +
                  '</div>'
      };
    })
    .directive('damageDisplay', function () {
      return {
        scope: {
          damage: '='
        },
        template: '<div class="display">Damage (remaining/max): {{ damage.remaining }}/{{ damage.max }}</div>'
      };
    })
    .directive('pedalToTheMetal', function () {
      return {
        scope: {
          clicked: '&'
        },
        template: '<div class="control"><a ng-click="clicked()">Put the pedal to the metal!</a></div>'
      };
    })
    .directive('extremeBrake', function () {
      return {
        scope: {
          clicked: '&'
        },
        template: '<div class="control"><a ng-click="clicked()">Extreme brake!</a></div>'
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