'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empresanueva', {
        url: '/empresa/nueva',
        templateUrl: 'app/empresa/empresanueva/empresanueva.html',
        controller: 'EmpresanuevaCtrl'
      });
  });
