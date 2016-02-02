'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('his_matricula', {
        url: '/historico/matricula',
        templateUrl: 'app/historico/his_matricula/his_matricula.html',
        controller: 'HisMatriculaCtrl'
      });
  });
