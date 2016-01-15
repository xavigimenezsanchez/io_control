'use strict';

describe('Controller: MatriculaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var MatriculaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatriculaCtrl = $controller('MatriculaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
