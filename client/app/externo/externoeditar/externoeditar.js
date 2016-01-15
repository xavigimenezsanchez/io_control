'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('externoeditar', {
        url: '/externo/editar',
        templateUrl: 'app/externo/externoeditar/externoeditar.html',
        controller: 'ExternoeditarCtrl'
      });
  });
