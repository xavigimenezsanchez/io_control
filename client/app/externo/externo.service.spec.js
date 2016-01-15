'use strict';

describe('Service: externo', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var externo;
  beforeEach(inject(function (_externo_) {
    externo = _externo_;
  }));

  it('should do something', function () {
    expect(!!externo).toBe(true);
  });

});
