'use strict';

describe('Controller: ExternofichaCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var ExternofichaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExternofichaCtrl = $controller('ExternofichaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
