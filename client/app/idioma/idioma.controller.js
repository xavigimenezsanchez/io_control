'use strict';

angular.module('ioControlApp')
  .controller('IdiomaCtrl', function ($scope, $state, Idioma) {
    Idioma.query(function(idiomas){
    	$scope.idiomas = idiomas;
    });
    $scope.delete = function(idioma) {
    	//idioma.remove(idioma._id);
    	Idioma.remove({id:idioma._id},function(){
    		 $scope.idiomas.splice($scope.idiomas.indexOf(idioma), 1);
    	});
    };

    $scope.edit = function(idioma) {
    	$state.go('idiomaeditar',{idioma:idioma._id});
    };
  });
