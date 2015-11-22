(function() {
  'use strict';

  angular
    .module('mancala')
      .controller('TwoController', ['$scope','$cookies', TwoController]);

  /** @ngInject */
  function TwoController($scope, $cookie) {
     var color = localStorage.getItem('background');
     if(color != null) {
       $scope.color = color;
      }
   	$scope.done = function() {
  		localStorage.setItem('chapter', 3);
  	}
    $scope.$watch('color',function( ) {
      localStorage.setItem('background', $scope.color);
    })
  }
})();
