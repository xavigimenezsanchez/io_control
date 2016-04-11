'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empresaeditar', {
        url: '/empresa/editar/:empresa',

        templateUrl: 'app/empresa/empresaeditar/empresaeditar.html',
        controller: 'EmpresaeditarCtrl'
      });
  });
