'use strict';

describe('Controller: DestinonuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var DestinonuevoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DestinonuevoCtrl = $controller('DestinonuevoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
