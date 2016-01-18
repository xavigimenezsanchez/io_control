'use strict';

angular.module('ioControlApp')
  .controller('IdiomaeditarCtrl', function ($scope, $stateParams, Idioma) {
    Idioma.get({id:$stateParams.idioma}, function(idioma) {
    	$scope.idioma = idioma;
    });

    $scope.edit = function() {
    	Idioma.update({id:$scope.idioma._id},$scope.idioma);
    }
  });
