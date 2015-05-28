angular.module('Racetrack')
    .service('canvasDrawing', function () {
      this.canvas = null;
      this.context = null;

      this.init = function (element) {
        this.canvas = element;
        this.context = this.canvas.getContext('2d');
      };

      // Clear the canvas to white.
      this.blankPage = function blankPage(paperColor) {
        var context = this.context;

        context.fillStyle = paperColor;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      };

      this.drawDot = function drawDot(point, radius, fillColor, strokeColor) {
        var context = this.context;

        context.beginPath();
        context.arc(point.x * 10, point.y * 10, radius, 0, 2 * Math.PI, false);
        context.fillStyle = fillColor;
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = strokeColor;
        context.stroke();
      };

      this.drawDots = function (from, to, dotColor) {
        for (var x = from.x; x < to.x; x++) {
          for (var y = from.y; y < to.y; y++) {
            this.drawDot({ x: x, y : y }, 1, dotColor, dotColor);
          }
        }
      };

      this.getMousePos = function getMousePos(evt) {
        var rect = this.canvas.getBoundingClientRect();

        return {
          x: Math.floor(((evt.clientX - rect.left) + 10) / 10),
          y: Math.floor(((evt.clientY - rect.top) + 10) / 10)
        };
      };

      this.onMouseMove = function (mouseMoveFunction) {
        this.canvas.addEventListener('mousemove', mouseMoveFunction);
      };
    });