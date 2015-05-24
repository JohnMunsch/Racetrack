angular.module('main', [])
    .directive('lightSwitch', function() {
      return {
        scope: {
        },
        controller: function($scope) {
        },
        transclude: true,
        template: '<div>' +
                    '<button class="btn btn-success" ' +
                        'ng-click="toggleSwitch()">Switch</button>' +
                    '<ng-transclude></ng-transclude>' +
                  '</div>'
      };
    })
    .directive('lightbulb', function($log) {
      return {
        scope: {
        },
        require: '^^lightSwitch',
        link: function(scope, element, attrs, controller) {
        },
        template: '<div ng-class="bulbClass()">i am a lightbulb</div>',
        priority: 10,
        controller: function () {
          $log.log('lightbulb');
        }
      };
    })
    .directive('peer', function ($log) {
      return {
        priority: 0,
        controller: function () {
          $log.log('peer');
        }
      };
    })