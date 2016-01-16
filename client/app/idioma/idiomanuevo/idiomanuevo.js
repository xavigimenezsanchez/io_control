'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('idiomanuevo', {
        url: '/idioma/nuevo',
        templateUrl: 'app/idioma/idiomanuevo/idiomanuevo.html',
        controller: 'IdiomanuevoCtrl'
      });
  });
