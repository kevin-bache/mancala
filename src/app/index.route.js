(function() {
  'use strict';

  angular
    .module('mancala')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('intro', {
        url: '/intro',
        templateUrl: 'app/intro/intro.html',
        controller: 'IntroController',
        controllerAs: 'intro'
      })
      .state('chapters', {
        url: '/chapters',
        templateUrl: 'app/main/chapters.html',
        controller: 'ChaptersController',
        controllerAs: 'chapters'
      })
      .state('chapter', {
        url: '/chapters/:chapter',
        templateUrl: 'app/main/chapter.html',
        controller: 'ChapterController',
        controllerAs: 'chapter'
      })
      .state('game', {
        url: '/',
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        controllerAs: 'game'
      })
  
    $urlRouterProvider.otherwise('/');
  }

})();
