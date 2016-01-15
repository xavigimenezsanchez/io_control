'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matricula', {
        url: '/matricula',
        templateUrl: 'app/matricula/matricula.html',
        controller: 'MatriculaCtrl'
      });
  });
