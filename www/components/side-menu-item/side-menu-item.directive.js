(function() {
    angular.module('super').directive('sideMenuItem', sideMenuItem);

    function sideMenuItem() {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                small: '@',
                iconSmall: '@'
            },
            templateUrl: 'components/side-menu-item/side-menu-item.html',
            link: function (scope, element, attrs) {
                // if(element[0].getElementsByClassName('side-menu-item').length > 0) {
                //     element.addClass('has-children');
                //     element.on('click', function (e) {
                //         element.toggleClass('expanded');
                //         e.preventDefault();
                //         return false;
                //     });
                // }
            }
        };
    }
})();
