'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matriculanueva', {
        url: '/matricula/nueva',
        templateUrl: 'app/matricula/matriculanueva/matriculanueva.html',
        controller: 'MatriculanuevaCtrl'
      });
  });
