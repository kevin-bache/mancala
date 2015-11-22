(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('SixController', SixController);

  /** @ngInject */
  function SixController($scope) {
  	 $scope.done = function() {
      localStorage.setItem('chapter', 7);
    }
  }

})();
