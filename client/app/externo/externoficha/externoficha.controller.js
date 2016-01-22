'use strict';

angular.module('ioControlApp')
  .controller('ExternofichaCtrl', function ($scope, $window, $stateParams, Externo) {
    Externo.get({id:$stateParams.externo}, function(externo) {
    	$scope.externo = externo;
    	//$scope.$apply();
    	//$scope.$apply(function() {window.print();});
    	//$scope.$evalAsync(function() {$window.print();})
    	

    });
    /*
    $scope.$watch('externo', function() {
    	//window.print();
    });*/


  	$scope.imprimir = function() {
  		$window.print();
  	}
  });
