'use strict';

describe('Controller: HistoricoCtrl', function () {

  // load the controller's module
  beforeEach(module('ioControlApp'));

  var HistoricoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoricoCtrl = $controller('HistoricoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
