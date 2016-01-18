'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('idiomaeditar', {
        url: '/idioma/editar/:idioma',
        templateUrl: 'app/idioma/idiomaeditar/idiomaeditar.html',
        controller: 'IdiomaeditarCtrl'
      });
  });
