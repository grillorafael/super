(function() {
    angular.module('super').directive('superFrame', superFrame);

    function superFrame() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'components/super-frame/super-frame.html',
            scope: {
                title: '@'
            },
            link: function (scope, element, attrs) {
                window.test = element;
            }
        };
    }
})();
