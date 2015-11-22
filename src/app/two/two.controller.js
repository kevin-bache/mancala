(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('TwoController', TwoController);

  /** @ngInject */
  function TwoController($scope) {
  	$scope.done = function() {
  		localStorage.setItem('chapter', 3);
  	}
  }

})();
