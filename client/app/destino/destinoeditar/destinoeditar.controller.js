'use strict';

angular.module('ioControlApp')
  .controller('DestinoeditarCtrl', function ($scope,$stateParams,Destino) {
    Destino.get({id:$stateParams.destino}, function(destino) {
    	$scope.destino = destino;
    });

    $scope.edit = function() {
    	Destino.update({id:$scope.destino._id},$scope.destino);
    }
  });
