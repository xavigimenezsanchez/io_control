'use strict';

describe('Service: destino', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var destino;
  beforeEach(inject(function (_destino_) {
    destino = _destino_;
  }));

  it('should do something', function () {
    expect(!!destino).toBe(true);
  });

});
