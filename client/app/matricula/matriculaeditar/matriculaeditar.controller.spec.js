'use strict';

describe('Controller: MatriculaeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var MatriculaeditarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatriculaeditarCtrl = $controller('MatriculaeditarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
