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
                function numberOfChildren() {
                    return element[0].getElementsByClassName('side-menu-item').length;
                }

                function setSubmenuHeight(height) {
                    element[0].style.marginBottom = height + 'px';
                    element[0].getElementsByTagName('ul')[0].style.height = height + 'px';
                }

                var isCollapsed = true;
                if(element[0].getElementsByClassName('side-menu-item').length > 0) {
                    element.addClass('has-submenu');

                    angular.element(element[0].children[1]).on('click', function (e) {
                        isCollapsed = !isCollapsed;
                        element.toggleClass('collapsed');
                        if(isCollapsed) {
                            setSubmenuHeight(0);
                        }
                        else {
                            setSubmenuHeight(numberOfChildren() * 40 + 8);
                        }

                        // Preventing route TODO Remove this behaviour
                        e.preventDefault();
                        return false;
                    });
                }
            }
        };
    }
})();
