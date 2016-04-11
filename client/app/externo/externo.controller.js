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
    $scope.print = function (externo) {
            if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                var popupWin = window.open('/externo/ficha/'+externo._id, '_blank', 'width=800,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                popupWin.window.focus();
                
                popupWin.onbeforeunload = function (event) {
                    popupWin.close();
                    return '.\n';
                };
                popupWin.onabort = function (event) {
                    popupWin.document.close();
                    popupWin.close();
                }
            } else {
                var popupWin = window.open('/externo/ficha/'+externo._id, '_blank', 'width=800,height=600');
                popupWin.document.close();
            }
            popupWin.document.close();

            return true;
        }
  });
