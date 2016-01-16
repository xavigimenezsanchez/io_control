'use strict';

describe('Service: idioma', function () {

  // load the service's module
  beforeEach(module('ioControlApp'));

  // instantiate service
  var idioma;
  beforeEach(inject(function (_idioma_) {
    idioma = _idioma_;
  }));

  it('should do something', function () {
    expect(!!idioma).toBe(true);
  });

});
