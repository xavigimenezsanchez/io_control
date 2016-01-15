'use strict';

describe('Controller: DestinoeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var DestinoeditarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DestinoeditarCtrl = $controller('DestinoeditarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
