'use strict';

angular.module('ioControlApp')
  .controller('EmpresanuevaCtrl', function ($scope,Empresa) {
    $scope.add = function() {
    	if ($scope.name == "" || $scope.name == undefined) {
    		$scope.error = "Nombre de empresa obligatorio";
    	} else {
    		Empresa.save('{"name":"'+$scope.name+'","info":"'+$scope.info+'"}',function() {
    			$scope.name = "";
    			$scope.info = "";
    		});
    		
    	};
    }
  });
