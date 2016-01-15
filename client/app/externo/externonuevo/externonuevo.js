'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('externonuevo', {
        url: '/externo/nuevo',
        templateUrl: 'app/externo/externonuevo/externonuevo.html',
        controller: 'ExternonuevoCtrl'
      });
  });
