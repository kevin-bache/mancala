(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('ChaptersController', ChaptersController);

  /** @ngInject */
  function ChaptersController($scope) {
  	$scope.active = function(number) {
  		var chapter = localStorage.getItem('chapter');
  		if(chapter == null) {
  			chapter = 1;
  		}
  		if(chapter < number){
  			return 'unavailable incomplete';
  		}
  		else if(chapter == number){
  			return "incomplete"
  		}
  		else {
  			return '';
  		}
  	}
    $scope.show = function(){
       var chapter = localStorage.getItem('chapter');
       if(chapter > 6) {
         return true
       }
       else {
         return false
       }
    }
  }
})();
