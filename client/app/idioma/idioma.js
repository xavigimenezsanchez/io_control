'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('idioma', {
        url: '/idioma',
        templateUrl: 'app/idioma/idioma.html',
        controller: 'IdiomaCtrl'
      });
  });
