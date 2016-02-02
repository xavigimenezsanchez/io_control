'use strict';

describe('Service: historico', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var historico;
  beforeEach(inject(function (_historico_) {
    historico = _historico_;
  }));

  it('should do something', function () {
    expect(!!historico).toBe(true);
  });

});
