(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('ThreeController', ThreeController);

  /** @ngInject */
  function ThreeController($scope) {
  	console.log(localStorage.getItem('pits'));
  	$scope.game = {
  		pits : (typeof localStorage.getItem('pits') !== 'undefined') ? localStorage.getItem('pits') : 6,
  		seeds:  (typeof localStorage.getItem('seeds')  !== 'undefined') ? localStorage.getItem('seeds') : 4,
  	};

  	$scope.$watch('game', function(old, newvalue){
  		console.log('trt');
  		localStorage.setItem('pits', parseInt($scope.game.pits));
  		localStorage.setItem('seeds', $scope.game.seeds);
  		
  	},true)
  }

})();
