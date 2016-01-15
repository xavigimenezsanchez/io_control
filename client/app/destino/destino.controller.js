'use strict';

angular.module('ioControlApp')
  .controller('DestinoCtrl', function ($scope,$state,Destino) {
    Destino.query(function(destinos){
    	$scope.destinos = destinos;
    });
    $scope.delete = function(destino) {
    	Destino.remove({id:destino._id},function(){
    		 $scope.destinos.splice($scope.destinos.indexOf(destino), 1);
    	});
    };

    $scope.edit = function(destino) {
    	$state.go('destinoeditar',{destino:destino._id});
    };
  });
