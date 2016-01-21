'use strict';

angular.module('ioControlApp')
  .controller('ExternoCtrl', function ($scope, Externo) {
    Externo.query(function(externos) {
    	$scope.externos = externos;
    });
  });
