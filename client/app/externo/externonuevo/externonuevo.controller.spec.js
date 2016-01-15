'use strict';

describe('Controller: ExternonuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var ExternonuevoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExternonuevoCtrl = $controller('ExternonuevoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
