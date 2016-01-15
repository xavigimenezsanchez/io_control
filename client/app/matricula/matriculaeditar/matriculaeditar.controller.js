'use strict';

angular.module('ioControlApp')
  .controller('MatriculaeditarCtrl', function ($scope,$stateParams,Matricula,Empresa) {
    Matricula.get({id:$stateParams.matricula}, function(matricula) {
    	$scope.matricula = matricula;
    });

    Empresa.query(function(empresas){
    	$scope.empresas = empresas;
    	$scope.itemArray
    });

    $scope.edit = function() {
    	Matricula.update({id:$scope.matricula._id},$scope.matricula);
    	//$scope.matricula.company = matricula.company;
    }
  });
