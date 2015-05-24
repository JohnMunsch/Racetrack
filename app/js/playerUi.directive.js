angular.module('Racetrack')
    .directive('playerUi', function ($log) {
      return {
        scope: {
          car: '=',
          turn: '=',
          adjustVector: '&'
        },
        templateUrl: 'js/playerUi.template.html'
      };
    });
