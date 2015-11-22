(function() {
  'use strict';

  angular
    .module('mancala')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
})
