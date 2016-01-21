'use strict';

angular.module('ioControlApp')
  .controller('ExternoeditarCtrl', function ($scope, $stateParams, Idioma,Empresa,Matricula, Externo) {
  	Idioma.query(function(idiomas) {
    	$scope.idiomas = idiomas;
    });

    Empresa.query(function(empresas) {
    	$scope.empresas = empresas;
    });

    Matricula.query(function(matriculas) {
    	$scope.matriculas = matriculas;
    });

    Externo.get({id:$stateParams.externo}, function(externo) {
    	$scope.externo = externo;
    });

    $scope.edit = function() {
    	Externo.update({id:$scope.externo._id},$scope.externo);
    }

    $scope.changeCar = function() {
    	$scope.externo.matricula = null;
    	$scope.externo.company = null;
    }
  });
