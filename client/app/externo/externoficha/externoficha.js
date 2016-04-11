'use strict';

angular.module('ioControlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('externoficha', {
        url: '/externo/ficha/:externo',
        templateUrl: 'app/externo/externoficha/externoficha.html',
        controller: 'ExternofichaCtrl'
      });
  });
