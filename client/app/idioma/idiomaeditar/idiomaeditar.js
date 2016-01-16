'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('idiomaeditar', {
        url: '/idioma/editar',
        templateUrl: 'app/idioma/idiomaeditar/idiomaeditar.html',
        controller: 'IdiomaeditarCtrl'
      });
  });
