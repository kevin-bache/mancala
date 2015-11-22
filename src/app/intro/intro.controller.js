(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('IntroController', IntroController);

  /** @ngInject */
  function IntroController($scope) {
  	$scope.done = function() {
  		localStorage.setItem('chapter', 2);
  	}
  }
})();
