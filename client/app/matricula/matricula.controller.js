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
        Historico.save({'in':Date.now(),'it': {"reference" : "matricula", "id":matricula._id}}, function(his) {
            console.log(his);
        },function(err) {
            if (err.status == 406) {
                //modal
                Modal.openModal();
            }
        });
    }

    $scope.out = function(matricula) {
        Historico.out({'out':Date.now(),'it': {"reference" : "matricula", "id":matricula._id}});
    }

    
    $scope.provaModal = Modal.warning.show('Aixpò és una prova','Això és el text de la prova');
});
