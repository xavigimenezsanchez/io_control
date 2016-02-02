'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('his_matricula_out', {
        url: '/historico/matricula/out',
        templateUrl: 'app/historico/his_matricula/his_matricula_out/his_matricula_out.html',
        controller: 'HisMatriculaOutCtrl'
      });
  });
