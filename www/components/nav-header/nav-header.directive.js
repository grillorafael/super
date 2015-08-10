(function() {
    angular.module('super').directive('navHeader', navHeader);

    function navHeader() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'components/nav-header/nav-header.html',
            link: function (scope, element, attrs) {

            }
        };
    }
})();
