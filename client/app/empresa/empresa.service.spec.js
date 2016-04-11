'use strict';

describe('Service: Empresa', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var empresa;
  beforeEach(inject(function (_empresa_) {
    empresa = _empresa_;
  }));

  it('should do something', function () {
    expect(!!empresa).toBe(true);
  });

});
