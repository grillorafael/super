angular.module('super-template', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('components/nav-header/nav-header.html', '<header class="super-nav-header">\n    <ng-transclude></ng-transclude>\n</header>');
  $templateCache.put('components/side-menu-item/side-menu-item.html', '<div class="side-menu-item" small="{{small}}">\n\n    <i ng-if=\'iconSmall\' class="{{iconSmall}} display-small"></i>\n    <ng-transclude></ng-transclude>\n</div>');
  $templateCache.put('components/side-menu/side-menu.html', '<nav class="super-side-menu">\n    <ng-transclude></ng-transclude>\n</nav>');
  $templateCache.put('components/super-footer/super-footer.html', '<footer class="super-footer">\n    <ng-transclude></ng-transclude>\n</footer>');
}]);
