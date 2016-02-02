'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('historico', {
        url: '/historico',
        templateUrl: 'app/historico/historico.html',
        controller: 'HistoricoCtrl'
      });
  });
