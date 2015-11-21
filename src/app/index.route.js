(function() {
  'use strict';

  angular
    .module('mancala')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('chapters', {
        url: '/',
        templateUrl: 'app/chapters/chapters.html',
        controller: 'ChaptersController',
        controllerAs: 'chapters'
      })
      .state('intro', {
        url: '/intro',
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroController',
        controllerAs: 'intro'
      })
    .state('two', {
        url: '/two',
        templateUrl: 'app/two/two.html',
        controller: 'TwoController',
        controllerAs: 'two'
      })
        .state('three', {
        url: '/three',
        templateUrl: 'app/three/three.html',
        controller: 'ThreeController',
        controllerAs: 'three'
      })
      .state('four', {
        url: '/four',
        templateUrl: 'app/four/four.html',
        controller: 'FourController',
        controllerAs: 'four'
      })
      .state('five', {
        url: '/five',
        templateUrl: 'app/five/five.html',
        controller: 'FiveController',
        controllerAs: 'five'
      })
            .state('six', {
        url: '/six',
        templateUrl: 'app/six/six.html',
        controller: 'SixController',
        controllerAs: 'six'
      })

/*      .state('game', {
        url: '/',
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        controllerAs: 'game'
      })
  
  */
    $urlRouterProvider.otherwise('/');
  }

})();
