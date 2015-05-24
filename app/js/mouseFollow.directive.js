angular.module('Racetrack')
    .directive('mouseFollow', function (canvasDrawing) {
      return {
        require: 'racetrack',
        priority: 0,
        link: function (scope, iElement, iAttrs, controller) {
          var lastPosition = null;

          var highlightColor = 'red';

          canvasDrawing.onMouseMove(function (evt) {
            var mousePosition = canvasDrawing.getMousePos(evt);

            if (controller.pointOutOfRange(mousePosition)) {
              return;
            }

            if (lastPosition) {
              // This erases the tracking dot.
              controller.eraseDot(lastPosition);

              // And this redraws whatever should be drawn in that spot.
              controller.redrawDot(lastPosition);
            }

            lastPosition = mousePosition;

            // We draw the tracking dot near where the mouse is located.
            canvasDrawing.drawDot(mousePosition, 2, highlightColor, highlightColor);
          }, false);
        }
      };
    });
