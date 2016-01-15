'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matriculaeditar', {
        url: '/matricula/editar/:matricula',
        templateUrl: 'app/matricula/matriculaeditar/matriculaeditar.html',
        controller: 'MatriculaeditarCtrl'
      });
  });
