angular.module('super-template', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('components/nav-header/nav-header.html', '<header class="super-nav-header">\n    <ng-transclude></ng-transclude>\n</header>');
  $templateCache.put('components/side-menu-item/side-menu-item.html', '<li class="side-menu-item" small="{{small}}">\n    <ng-transclude></ng-transclude>\n    <i class="fa fa-chevron-left collapse-icon"></i>\n</li>');
  $templateCache.put('components/side-menu/side-menu.html', '<nav class="super-side-menu">\n    <ul ng-transclude></ul>\n</nav>');
  $templateCache.put('components/super-footer/super-footer.html', '<footer class="super-footer">\n    <ng-transclude></ng-transclude>\n</footer>');
}]);
