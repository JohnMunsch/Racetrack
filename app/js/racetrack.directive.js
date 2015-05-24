angular.module('Racetrack')
    .directive('racetrack', function (canvasDrawing, $log) {
      return {
        scope: {
          trackData: '='
        },
        priority: 10,
        controller: function ($scope, $element) {
          var self = this;

          var paperColor = 'white';
          var dotColor = '#bdbdbd';
          var hazardColor = 'green';

          /////////////////////////////////////////////////////////////////
          // Functions on the controller are available to other directives
          /////////////////////////////////////////////////////////////////

          this.pointOutOfRange = function (point) {
            return (point.x < 1 || point.x > ($scope.trackData.width - 1) || point.y < 1 ||
                    point.y > ($scope.trackData.height - 1));
          };

          // Draw the dots which make up our "graph paper".
          this.drawGraphPaperDot = function (point) {
            canvasDrawing.drawDot(point, 1, dotColor, dotColor);
          };

          this.drawHazardDot = function (point) {
            canvasDrawing.drawDot(point, 1, hazardColor, hazardColor);
          };

          this.eraseDot = function (point) {
            canvasDrawing.drawDot(point, 3, paperColor, paperColor);
          };

          // Draw the cars atop that.
          this.drawCars = function () {
            _.each($scope.trackData.cars, function (car) {
              canvasDrawing.drawDot(_.last(car.positions), 1, car.color, car.color);
            });
          };

          this.redrawDot = function (point) {
            // This is a crude way to do it, but it checks to see if the point is in the area we draw as "hazard".
            if (point.x >= 10 && point.y >= 10 && point.x < $scope.trackData.width - 10 &&
                point.y < $scope.trackData.height - 10) {
              self.drawHazardDot(point)
            } else {
              self.drawGraphPaperDot(point);
            }

            // Finally, redraw the cars, just in case one of those was overwritten.
            self.drawCars();
          };

          canvasDrawing.init($element[0]);

          // Draw a blank piece of paper.
          canvasDrawing.blankPage(paperColor);

          canvasDrawing.drawDots({ x: 1, y: 1 },
              { x: $scope.trackData.width, y: $scope.trackData.height }, dotColor);
          canvasDrawing.drawDots({ x: 10, y: 10 },
              { x: $scope.trackData.width - 10, y: $scope.trackData.height - 10 }, hazardColor);
          this.drawCars();

          // When the racetrack data changes, update the display.
          $scope.$watch('trackData.cars', function (newValue, oldValue) {
            // Note: This leaves ghost images of past positions for each car because I don't try and erase the previous
            // positions. But I actually find I like seeing the previous positions so I've left it.
            self.drawCars();
          }, true);
        }
      };
    });
