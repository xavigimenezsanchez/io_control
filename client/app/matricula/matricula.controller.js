'use strict';

angular.module('ioControlApp')
  .controller('MatriculaCtrl', function ($scope,$state,Matricula) {
    Matricula.query(function(matriculas){
    	$scope.matriculas = matriculas;
    });
    $scope.delete = function(matricula) {
    	//Empresa.remove(empresa._id);
    	Matricula.remove({id:matricula._id},function(){
    		 $scope.matriculas.splice($scope.matriculas.indexOf(matricula), 1);
    	});
    };

    $scope.edit = function(matricula) {
    	$state.go('matriculaeditar',{matricula:matricula._id});
    };
  });
