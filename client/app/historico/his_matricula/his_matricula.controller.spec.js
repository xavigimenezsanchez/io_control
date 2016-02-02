'use strict';

describe('Controller: HisMatriculaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var HisMatriculaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HisMatriculaCtrl = $controller('HisMatriculaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
