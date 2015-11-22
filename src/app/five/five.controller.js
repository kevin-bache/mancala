(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('FiveController', FiveController);

  /** @ngInject */
  function FiveController($scope) {
  	 $scope.game = {
  		sound : (localStorage.getItem('sound') !== 'null') ? localStorage.getItem('sound') : 'none'
  	};
  	console.log(localStorage.getItem('sound') !== 'null');
  	$scope.$watch('game', function(old, newvalue){
  		if($scope.game.sound != 'none'){
  			var audio = new Audio('/assets/sounds/' + $scope.game.sound +'.mp3');
        	audio.play();
        }
  		localStorage.setItem('sound', $scope.game.sound);

  	},true)
     $scope.done = function() {
      localStorage.setItem('chapter', 6);
    }
  }

})();
