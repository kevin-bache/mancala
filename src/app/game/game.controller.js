(function() {
  'use strict';

  angular
    .module('mancala')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($scope, $timeout) {
        $scope.range = function(count){
          return new Array(+count);
        };
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

        $scope.pits = (localStorage.getItem('pits')) ? localStorage.getItem('pits') : 6;
        $timeout(function() {
          var game = new Game(Mancala);
          game.reset_game();
          game.load_game();
     
          game.init();
          var waiting_for_move = true;

          /**
           * Initialize pit elements as
           * @param {String}   player The player who the row belongs to
           * @param {NodeList} row    The pit elements to initialize
           */
          var init_pits = function (player, row) {
            var onclick = function () {
              if (game.player === player && waiting_for_move) {
                waiting_for_move = false;

                var pit = parseInt(this.getAttribute('data-pit'));
                if (!game.do_player_turn(pit)) {
                  waiting_for_move = true;
                }
              }
            };

            for (var pit = 0; pit < row.length; pit++) {
              row[pit].setAttribute('data-pit', pit);
              row[pit].onclick = onclick;
            }
          };

          init_pits('one', document.querySelectorAll('.row.player-one .pit'));
          init_pits('two', document.querySelectorAll('.row.player-two .pit'));

          document.querySelector('.new-game').onclick = function () {
            game.reset_game();
            window.location.reload();
          };
          return game;
        })

  }
})();
