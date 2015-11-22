(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('ThreeController', ThreeController);

  /** @ngInject */
  function ThreeController($scope) {

  	$scope.game = {
  		pits : (localStorage.getItem('pits') !== 'null') ? localStorage.getItem('pits') : 6,
  		seeds:  ( localStorage.getItem('seeds')  !== 'null') ? localStorage.getItem('seeds') : 4,
  	};

  	$scope.$watch('game', function(old, newvalue){
  		localStorage.setItem('pits', $scope.game.pits);
  		localStorage.setItem('seeds', $scope.game.seeds);
  		
  	},true)
    $scope.done = function() {
      localStorage.setItem('chapter', 4);
    }
  }

})();
