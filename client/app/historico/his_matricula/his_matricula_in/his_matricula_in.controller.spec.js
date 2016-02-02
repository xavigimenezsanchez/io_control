'use strict';

describe('Controller: HisMatriculaInCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var HisMatriculaInCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HisMatriculaInCtrl = $controller('HisMatriculaInCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
