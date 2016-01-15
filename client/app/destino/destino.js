'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('destino', {
        url: '/destino',
        templateUrl: 'app/destino/destino.html',
        controller: 'DestinoCtrl'
      });
  });
