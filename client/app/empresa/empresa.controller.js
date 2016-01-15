'use strict';

angular.module('ioControlApp')
  .controller('EmpresaCtrl', function ($scope,$state,Empresa) {
    //$scope.message = 'Hello';
    //$scope.empresas = Empresa.query();
    Empresa.query(function(empresas){
    	$scope.empresas = empresas;
    });
    $scope.delete = function(empresa) {
    	//Empresa.remove(empresa._id);
    	Empresa.remove({id:empresa._id},function(){
    		 $scope.empresas.splice($scope.empresas.indexOf(empresa), 1);
    	});
    };

    $scope.edit = function(empresa) {
    	$state.go('empresaeditar',{empresa:empresa._id});
    };
  });
