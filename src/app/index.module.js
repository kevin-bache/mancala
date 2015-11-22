(function() {
  'use strict';

  angular
    .module('mancala', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'ngCookies',	 'mdColorPicker']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('indigo');
	});
})();
