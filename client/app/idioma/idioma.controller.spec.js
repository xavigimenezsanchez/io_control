'use strict';

describe('Controller: IdiomaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var IdiomaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdiomaCtrl = $controller('IdiomaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
