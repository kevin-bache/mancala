(function() {
  'use strict';

  angular
    .module('mancala')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    
  }

})();
