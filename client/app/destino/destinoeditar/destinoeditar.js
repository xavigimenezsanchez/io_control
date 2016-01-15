'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('destinoeditar', {
        url: '/destino/editar/:destino',
        templateUrl: 'app/destino/destinoeditar/destinoeditar.html',
        controller: 'DestinoeditarCtrl'
      });
  });
