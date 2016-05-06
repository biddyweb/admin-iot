'use strict';

describe('Service: lang', function () {

  // load the service's module
  beforeEach(module('iotApp'));

  // instantiate service
  var lang;
  beforeEach(inject(function (_lang_) {
    lang = _lang_;
  }));

  it('should do something', function () {
    expect(!!lang).toBe(true);
  });

});
