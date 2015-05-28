angular.module('Racetrack')
  .controller('MainController', function ($scope, $location, $log) {
    $scope.racetrack = {
      width: 100,
      height: 50,
      turn: 0,
      cars: [
        {
          color: 'red',
          vector: {
            x: 0,
            y: 0
          },
          positions: [
            { x: 50, y: 44 }
          ]
        },
        {
          color: 'blue',
          vector: {
            x: 0,
            y: 0
          },
          positions: [
            { x: 50, y: 46 }
          ]
        }
      ]
    };

    $scope.takeTurn = function (car, adjustment) {
      car.vector.x += adjustment.x;
      car.vector.y += adjustment.y;

      var lastPosition = _.last(car.positions);
      var newPosition = {
        x: lastPosition.x + car.vector.x,
        y: lastPosition.y + car.vector.y
      };

      car.positions.push(newPosition);
      
      $scope.racetrack.turn++;
    };

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };
  });
