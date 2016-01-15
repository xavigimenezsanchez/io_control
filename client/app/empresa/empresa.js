'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empresa', {
        url: '/empresa',
        templateUrl: 'app/empresa/empresa.html',
        controller: 'EmpresaCtrl'
      });
  });
