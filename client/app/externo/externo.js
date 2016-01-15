'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('externo', {
        url: '/externo',
        templateUrl: 'app/externo/externo.html',
        controller: 'ExternoCtrl'
      });
  });
