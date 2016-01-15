'use strict';

describe('Controller: EmpresaeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var EmpresaeditarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpresaeditarCtrl = $controller('EmpresaeditarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
