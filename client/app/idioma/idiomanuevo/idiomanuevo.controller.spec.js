'use strict';

describe('Controller: IdiomanuevoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var IdiomanuevoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdiomanuevoCtrl = $controller('IdiomanuevoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
