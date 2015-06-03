angular.module('Racetrack')
    .directive('helmet', function () {
      // This is the second version of the directive, it shows a directive with bound attributes that
      // allow the directive to feed back to the code and modify its appearance.
      return {
        scope: {
          color: '@'
        },
        template: '<div ng-style="{ fill: color }">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="4.5 -9.0 90.0 121.5" enable-background="new 0 0 90 90" xml:space="preserve" height="100px" width="100px">' +
        '<circle cx="45.2" cy="42.9" r="1.4"/>' +
        '<path d="M37.8,69.6c-0.7,0-1.3-0.4-1.5-1c-0.3-0.8,0.1-1.8,0.9-2.1c0.2-0.1,18.1-7.3,19.9-8.1c0.8-0.4,1.8,0,2.2,0.8  c0.4,0.8,0,1.8-0.8,2.2c-1.9,0.8-19.3,7.8-20,8.1C38.2,69.6,38,69.6,37.8,69.6z"/>' +
        '<path d="M27.2,55c-0.1,0-0.2,0-0.3,0c-0.9-0.1-1.5-1-1.4-1.9l1.5-9.8c0.1-0.9,1-1.5,1.9-1.4c0.9,0.1,1.5,1,1.4,1.9l-1.5,9.8  C28.7,54.4,28,55,27.2,55z"/>' +
        '<path d="M46.2,27.2c-10.9,0-15.6,7.1-17.4,10.8c-0.7,1.6,0.2,2.1,1.1,2.1c2.2,0.1,6.1,0.3,9.8,0.6c0,0,0.8,0.1,1.4-0.1  c0.7-0.2,2.9-1,2.9-1c0,0,0.1,0,0.1,0l0,0l0,0c0.3-0.1,0.6-0.1,1-0.1c1.9,0,3.5,1.6,3.5,3.5c0,0.8-0.3,1.5-0.7,2.1l0,0l-2.2,3.5  c-0.1,0.1-0.1,0.2-0.2,0.4l0,0l0,0c-0.3,0.3-0.8,0.6-1.5,1c-1.6,0.7-12.1,4.9-16.7,6.8c-0.7,0.3-1.7,1.1-1.7,2.3  c0,2.4,4.2,7.5,6.9,6.6c0,0,24.6-9.9,27.2-11.1c2.6-1.1,3-1.9,3.5-3.4c0.6-1.8,1.3-4.3,1.3-6.9C64.4,39.5,61.1,27.2,46.2,27.2z   M60.3,40.2c-0.2,0.1-0.5,0.1-0.7,0.1c-0.6,0-1.2-0.4-1.5-1c-1.2-2.5-3.6-5.9-8.4-7.1c-0.9-0.2-1.4-1.1-1.2-2c0.2-0.9,1.1-1.4,2-1.2  c6,1.6,9,5.8,10.5,8.9C61.5,38.8,61.1,39.8,60.3,40.2z"/>' +
        '</svg>' +
        '</div>'
      };
    });