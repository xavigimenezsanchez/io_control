'use strict';

describe('Controller: HisMatriculaOutCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var HisMatriculaOutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HisMatriculaOutCtrl = $controller('HisMatriculaOutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
