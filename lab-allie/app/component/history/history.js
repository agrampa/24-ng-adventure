'use strict';

// require('./_history.scss');

require('angular')
.module('ngAdventure')
.component('history', {
  template: require('./history.html'),
  controllerAs: 'historyCtrl',
  controller: ['$log', 'history', function($log, playerService) {
    $log.debug('#player-info controller');
    
    this.history = playerService.history;
  }],
});