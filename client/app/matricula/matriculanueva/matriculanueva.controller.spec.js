'use strict';

describe('Controller: MatriculanuevaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var MatriculanuevaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatriculanuevaCtrl = $controller('MatriculanuevaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
