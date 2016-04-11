'use strict';

angular.module('ioControlApp')
  .controller('DestinonuevoCtrl', function ($scope,Destino) {
    $scope.add = function() {
    	if ($scope.name == "" || $scope.name == undefined) {
    		$scope.error = "Nombre de destino obligatorio";
    	} else {
    		Destino.save('{"name":"'+$scope.name+'","info":"'+$scope.info+'"}',function() {
    			$scope.name = "";
    			$scope.info = "";
    		});
    		
    	};
    }
  });
