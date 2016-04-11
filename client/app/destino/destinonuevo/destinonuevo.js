'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('destinonuevo', {
        url: '/destino/nuevo',
        templateUrl: 'app/destino/destinonuevo/destinonuevo.html',
        controller: 'DestinonuevoCtrl'
      });
  });
