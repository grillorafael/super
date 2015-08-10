(function() {
    angular.module('super').directive('sideMenu', sideMenu);

    function sideMenu() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'components/side-menu/side-menu.html',
            link: function (scope, element, attrs) {
                var state = 'open';

                scope.$on('close menu', function (e) {
                    if(state !== 'closed') {
                        element.addClass('closed');
                        state = 'closed';
                    }
                });

                scope.$on('open menu', function (e) {
                    if(state === 'closed') {
                        element.removeClass('closed');
                        state = 'open';
                    }
                });

                scope.$on('toggle', toggle);

                function toggle() {
                    if(state == 'closed') {
                        element.removeClass('closed');
                        state = 'open';
                    }
                    else {
                        element.addClass('closed');
                        state = 'closed';
                    }
                }

                scope.$toggle = toggle;
                scope.$isOpen = function () {
                    return state === 'open';
                };
            }
        };
    }
})();
