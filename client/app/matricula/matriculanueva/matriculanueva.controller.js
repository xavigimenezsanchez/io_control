'use strict';

angular.module('ioControlApp')
  .controller('MatriculanuevaCtrl', function ($scope,Empresa,Matricula) {
    Empresa.query(function(empresas) {
    	$scope.empresas = empresas;
    	$scope.selectedItem= $scope.empresas[0];
    });

    $scope.add = function() {
    	Matricula.save($scope.matricula);
    }
  });
