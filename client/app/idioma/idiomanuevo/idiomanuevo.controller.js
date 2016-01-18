'use strict';

angular.module('ioControlApp')
  .controller('IdiomanuevoCtrl', function ($scope, Idioma) {
    $scope.add = function() {
    	if ($scope.name == "" || $scope.name == undefined) {
    		$scope.error = "Nombre de idioma obligatorio";
    	} else {
    		Idioma.save('{"name":"'+$scope.name+'","info":"'+$scope.info+'"}',function() {
    			$scope.name = "";
    			$scope.info = "";
    		});
    		
    	};
  };
});
