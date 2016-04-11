'use strict';

angular.module('ioControlApp')
  .controller('HisMatriculaCtrl', function ($scope,Historico) {
     
    Historico.matricula.in(function(mat) {
    	$scope.matriculas = mat;
    });
  });
