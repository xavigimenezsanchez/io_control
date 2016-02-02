'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('his_matricula_in', {
        url: '/historico/matricula/in',
        templateUrl: 'app/historico/his_matricula/his_matricula_in/his_matricula_in.html',
        controller: 'HisMatriculaInCtrl'
      });
  });
