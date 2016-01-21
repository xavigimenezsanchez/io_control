'use strict';

angular.module('ioControlApp')
  .controller('ExternoCtrl', function ($scope, $state, Externo) {
    Externo.query(function(externos) {
    	$scope.externos = externos;
    });

    $scope.delete = function(externo) {
    	Externo.remove({id:externo._id}, function() {
    		$scope.externos.splice($scope.externos.indexOf(externo),1);
    	});
    };

    $scope.edit = function(externo) {
    	$state.go('externoeditar', {externo: externo._id});
    };
  });
