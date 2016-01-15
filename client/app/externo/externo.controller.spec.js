'use strict';

describe('Controller: ExternoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var ExternoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExternoCtrl = $controller('ExternoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
