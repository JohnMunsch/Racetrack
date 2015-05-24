angular.module('main', [])
  .controller('main', function ($scope, $log) {
    $scope.racetrack = {
      width: 50,
      height: 50,
      turn: 0,
      cars: [
        {
          color: 'red',
          vectorX: 2,
          vectorY: 0,
          positions: [
            { x: 25, y: 45 },
            { x: 26, y: 45 },
            { x: 28, y: 45 }
          ]
        },
        {
          color: 'blue',
          vectorX: 2,
          vectorY: 1,
          positions: [
            { x: 25, y: 47 },
            { x: 26, y: 47 },
            { x: 28, y: 48 }
          ]
        }
      ]
    };
  })
  .service('canvasDrawing', function () {
    this.canvas = null;
    this.context = null;

    this.init = function (id) {
      // Get a reference to the canvas object
      this.canvas = document.getElementById(id);
      this.context = this.canvas.getContext('2d');
    };

    // Clear the canvas to white.
    this.blankPage = function blankPage(paperColor) {
      var context = this.context;

      context.fillStyle = paperColor;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.drawDot = function drawDot(x, y, radius, fillColor, strokeColor) {
      var context = this.context;

      context.beginPath();
      context.arc(x * 20, y * 20, radius, 0, 2 * Math.PI, false);
      context.fillStyle = fillColor;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = strokeColor;
      context.stroke();
    };

    this.drawDots = function (width, height, dotColor) {
      for (var x = 1; x < width; x++) {
        for (var y = 1; y < height; y++) {
          this.drawDot(x, y, 2, dotColor, dotColor);
        }
      }
    };

    this.drawCarPaths = function drawCarPaths(cars) {
      var context = this.context;

      _.each(cars, function (car) {
        context.beginPath();
        var firstPosition = _.first(car.positions);
        context.moveTo(firstPosition.x * 20, firstPosition.y * 20);

        _.each(_.rest(car.positions), function (position) {
          context.lineTo(position.x * 20, position.y * 20);
        });
        context.strokeStyle = car.color;
        context.lineWidth = 4;
        context.stroke();
      });
    };

    this.getMousePos = function getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();

      return {
        x: Math.floor(((evt.clientX - rect.left) + 10) / 20),
        y: Math.floor(((evt.clientY - rect.top) + 10) / 20)
      };
    };

    this.onMouseMove = function (mouseMoveFunction) {
      this.canvas.addEventListener('mousemove', mouseMoveFunction);
    };
  })
  .directive('helmet', function () {
    // This is the second version of the directive, it shows a directive with bound attributes that
    // allow the directive to feed back to the code and modify its appearance.
    return {
      scope: {
        clicked: '&',
        color: '@'
      },
      template: '<div ng-click="clicked()" ng-style="{ fill: color }">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="4.5 -9.0 90.0 121.5" enable-background="new 0 0 90 90" xml:space="preserve" height="100px" width="100px">' +
                    '<circle cx="45.2" cy="42.9" r="1.4"/>' +
                    '<path d="M37.8,69.6c-0.7,0-1.3-0.4-1.5-1c-0.3-0.8,0.1-1.8,0.9-2.1c0.2-0.1,18.1-7.3,19.9-8.1c0.8-0.4,1.8,0,2.2,0.8  c0.4,0.8,0,1.8-0.8,2.2c-1.9,0.8-19.3,7.8-20,8.1C38.2,69.6,38,69.6,37.8,69.6z"/>' +
                    '<path d="M27.2,55c-0.1,0-0.2,0-0.3,0c-0.9-0.1-1.5-1-1.4-1.9l1.5-9.8c0.1-0.9,1-1.5,1.9-1.4c0.9,0.1,1.5,1,1.4,1.9l-1.5,9.8  C28.7,54.4,28,55,27.2,55z"/>' +
                    '<path d="M46.2,27.2c-10.9,0-15.6,7.1-17.4,10.8c-0.7,1.6,0.2,2.1,1.1,2.1c2.2,0.1,6.1,0.3,9.8,0.6c0,0,0.8,0.1,1.4-0.1  c0.7-0.2,2.9-1,2.9-1c0,0,0.1,0,0.1,0l0,0l0,0c0.3-0.1,0.6-0.1,1-0.1c1.9,0,3.5,1.6,3.5,3.5c0,0.8-0.3,1.5-0.7,2.1l0,0l-2.2,3.5  c-0.1,0.1-0.1,0.2-0.2,0.4l0,0l0,0c-0.3,0.3-0.8,0.6-1.5,1c-1.6,0.7-12.1,4.9-16.7,6.8c-0.7,0.3-1.7,1.1-1.7,2.3  c0,2.4,4.2,7.5,6.9,6.6c0,0,24.6-9.9,27.2-11.1c2.6-1.1,3-1.9,3.5-3.4c0.6-1.8,1.3-4.3,1.3-6.9C64.4,39.5,61.1,27.2,46.2,27.2z   M60.3,40.2c-0.2,0.1-0.5,0.1-0.7,0.1c-0.6,0-1.2-0.4-1.5-1c-1.2-2.5-3.6-5.9-8.4-7.1c-0.9-0.2-1.4-1.1-1.2-2c0.2-0.9,1.1-1.4,2-1.2  c6,1.6,9,5.8,10.5,8.9C61.5,38.8,61.1,39.8,60.3,40.2z"/>' +
                  '</svg>' +
                '</div>'
    };
  })
  .directive('driverUi', function () {
    return {
      scope: {
        car: '='
      },
      templateUrl: 'views/playerInfo.html'
    };
  })
  .directive('racetrack', function (canvasDrawing, $log) {
    return {
      scope: {
        trackData: '='
      },
      controller: function ($scope) {
        canvasDrawing.init('racetrack');
      },
      link: function ($scope) {
        var paperColor = 'white';
        var dotColor = 'black';
        var highlightColor = 'red';

        // Draw a blank piece of paper.
        canvasDrawing.blankPage(paperColor);

        // Draw the dots which make up our "graph paper".
        canvasDrawing.drawDots($scope.trackData.width, $scope.trackData.height, dotColor);

        // Draw the cars atop that.
        canvasDrawing.drawCarPaths($scope.trackData.cars);

        //var lastX = null;
        //var lastY = null;
        //
        //canvasDrawing.onMouseMove(function(evt) {
        //  var mousePos = canvasDrawing.getMousePos(evt);
        //
        //  if (mousePos.x < 1 || mousePos.x > 49 || mousePos.y < 1 || mousePos.y > 49) {
        //    return;
        //  }
        //
        //  if (lastX && lastY) {
        //    // This erases the bigger highlight dot.
        //    canvasDrawing.drawDot(lastX, lastY, 6, paperColor, paperColor);
        //
        //    // And this redraws the normal dot.
        //    canvasDrawing.drawDot(lastX, lastY, 2, dotColor, dotColor);
        //  }
        //
        //  lastX = mousePos.x;
        //  lastY = mousePos.y;
        //
        //  canvasDrawing.drawDot(mousePos.x, mousePos.y, 4, highlightColor, highlightColor);
        //  canvasDrawing.drawCarPaths($scope.trackData.cars);
        //}, false);
      },
      template: '<canvas id="racetrack" width="1000" height="1000"></canvas>'
    };
  });
