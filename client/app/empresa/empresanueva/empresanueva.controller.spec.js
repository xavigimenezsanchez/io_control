'use strict';

describe('Controller: EmpresanuevaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var EmpresanuevaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpresanuevaCtrl = $controller('EmpresanuevaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
