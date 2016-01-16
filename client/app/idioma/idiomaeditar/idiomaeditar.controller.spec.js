'use strict';

describe('Controller: IdiomaeditarCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var IdiomaeditarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdiomaeditarCtrl = $controller('IdiomaeditarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
