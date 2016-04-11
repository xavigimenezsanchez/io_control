'use strict';

angular.module('ioControlApp')
  .controller('MatriculaCtrl', function ($scope,$state,Matricula,Historico, Modal) {
    Matricula.query(function(matriculas){
    	$scope.matriculas = matriculas;
    });
    $scope.delete = function(matricula) {
    	//Empresa.remove(empresa._id);
    	Matricula.remove({id:matricula._id},function(){
    		 $scope.matriculas.splice($scope.matriculas.indexOf(matricula), 1);
    	});
    };

    $scope.edit = function(matricula) {
    	$state.go('matriculaeditar',{matricula:matricula._id});
    };

    $scope.in = function(matricula) {
        Historico.all.save({'in':Date.now(),'it': {"reference" : "matricula", "id":matricula._id}}, function(his) {
            Modal.success.show('Hecho','Matricula ' + matricula.name + ' ha entrado a Enplater')();

        },function(err) {
            if (err.status == 406) {
                //modal
                Modal.warning.show('Error','Matricula ' + matricula.name +' ya ha entrado a las instalaciones de Enplater')();
            }
        });
    }

    $scope.out = function(matricula) {
        Historico.all.out({'out':Date.now(),'it': {"reference" : "matricula", "id":matricula._id}}, function(his) {
            Modal.success.show('Hecho','Matricula ' + matricula.name + ' ha salido de Enplater')();
        }, function(err) {
            if (err.status == 406) {
                Modal.warning.show('Error', 'Matricula ' + matricula.name +' no ha entrado a las instalaciones de Enplater')();
            }
        });
    }

});
