'use strict';

angular.module('ioControlApp')
  .controller('EmpresaeditarCtrl', function ($scope,$stateParams,Empresa) {
    Empresa.get({id:$stateParams.empresa}, function(empresa) {
    	$scope.empresa = empresa;
    });

    $scope.edit = function() {
    	Empresa.update({id:$scope.empresa._id},$scope.empresa);
    }
  });
