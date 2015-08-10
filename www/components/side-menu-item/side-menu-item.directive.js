(function() {
    angular.module('super').directive('sideMenuItem', sideMenuItem);

    function sideMenuItem() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                small: '@'
            },
            templateUrl: 'components/side-menu-item/side-menu-item.html',
            link: function (scope, element, attrs) {

            }
        };
    }
})();
