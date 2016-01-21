'use strict';

angular.module('ioControlApp')
  .controller('ExternonuevoCtrl', function ($scope,Idioma,Empresa,Matricula, Externo) {
    $scope.externo ={};
    $scope.externo.haveNumberPlate = true;
    Idioma.query(function(idiomas) {
    	$scope.idiomas = idiomas;
    });

    Empresa.query(function(empresas) {
    	$scope.empresas = empresas;
    });

    Matricula.query(function(matriculas) {
    	$scope.matriculas = matriculas;
    });

    $scope.add = function() {
    	if ($scope.externo.name == "" || $scope.externo.name == undefined) {
    		$scope.error = "Nombre de idioma obligatorio";
    	} else {
    		Externo.save($scope.externo,function() {
    			$scope.externo = {};
    			$scope.externo.haveNumberPlate = true;
    		});
    		
    	};
    }
    

  });
