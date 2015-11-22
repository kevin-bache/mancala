(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('FourController', FourController);

  /** @ngInject */
  function FourController($scope) {
  	 $scope.done = function() {
      localStorage.setItem('chapter', 5);
    }
  }

})();
