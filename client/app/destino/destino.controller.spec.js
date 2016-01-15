'use strict';

describe('Controller: DestinoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var DestinoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DestinoCtrl = $controller('DestinoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
