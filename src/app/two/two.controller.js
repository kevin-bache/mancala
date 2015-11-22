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
    var sprite1 = localStorage.getItem('sprite1');
     if(color != null) {
       $scope.sprite1 = sprite1;
      }
      var sprite2 = localStorage.getItem('sprite2');
     if(sprite2 != null) {
       $scope.sprite2 = sprite2;
      }
      var sprite3 = localStorage.getItem('sprite3');
     if(sprite3 != null) {
       $scope.sprite3 = sprite3;
      }
      var sprite4 = localStorage.getItem('sprite4');
     if(sprite4 != null) {
       $scope.sprite4 = sprite4;
      }
   	$scope.done = function() {
  		localStorage.setItem('chapter', 3);
  	}
    $scope.$watch('color',function( ) {
      localStorage.setItem('background', $scope.color);
    })

    $scope.$watch('sprite1',function( ) {
      localStorage.setItem('sprite1', $scope.sprite1);
    })
    $scope.$watch('sprite2',function( ) {
      localStorage.setItem('sprite2', $scope.sprite2);
    })
    $scope.$watch('sprite3',function( ) {
      localStorage.setItem('sprite3', $scope.sprite3);
    })
    $scope.$watch('sprite4',function( ) {
      localStorage.setItem('sprite4', $scope.sprite4);
    })
  }
})();
