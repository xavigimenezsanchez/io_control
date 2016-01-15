'use strict';

describe('Controller: ExternoeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var ExternoeditarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExternoeditarCtrl = $controller('ExternoeditarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
