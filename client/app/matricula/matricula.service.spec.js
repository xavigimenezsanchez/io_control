'use strict';

describe('Service: matricula', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var matricula;
  beforeEach(inject(function (_matricula_) {
    matricula = _matricula_;
  }));

  it('should do something', function () {
    expect(!!matricula).toBe(true);
  });

});
