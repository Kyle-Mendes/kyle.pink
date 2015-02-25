'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version', function(version) {
   return function(scope, elm, attrs) {
      elm.text(version);
   };
}])
.directive('hereStateContainer', function () {
    var currentClass    = 'current';
    var currentSelector = '.' + currentClass;
    var markerSelector = '.here-state';

    function moveMarker(container, oldPos) {
        var newPos = container.find(currentSelector).position();
        var marker = container.find(markerSelector);
        var item = container.find(currentSelector);

        var scale = ((!oldPos || (newPos.left > oldPos.left)) ? '-' : '') + '1';
        marker.css({
            'left': newPos.left + 'px',
            '-webkit-transform': 'scaleX(' + scale + ')'
        });
    }

    return {
        restrict: 'A',
        link: function hereStateContainerPostLink(scope, elem) {
            function hereStateContainerOnClick() {
                var currentElem = elem.find(currentSelector);
                var oldPos;

                if (currentElem) {
                    oldPos = currentElem.position();
                    currentElem.removeClass(currentClass);
                }

                $(this).addClass(currentClass);
                moveMarker(elem, oldPos);
            }

            elem.find('a').on('click', hereStateContainerOnClick);
            scope.$on('$destroy', function hereStateContainerOnDestroy() {
                elem.find('a').off('click', hereStateContainerOnClick);
            });

            moveMarker(elem);
        }
    };
})
.directive('topdownGame', function () {
    return {
        restrict: 'E',
        templateUrl: 'games/topdown/index.html'
    };
});


