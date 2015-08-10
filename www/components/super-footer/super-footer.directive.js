(function() {
    angular.module('super').directive('superFooter', superFooter);

    function superFooter() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'components/super-footer/super-footer.html',
            link: function (scope, element, attrs) {

            }
        };
    }
})();
