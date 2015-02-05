var expect = require('chai').expect
  , licenses = require('./../index').licenses
  , createLicense = require('./../index').createLicense
  , getLicense = require('./../index').getLicense
  ;

  describe('licenses', function () {
    it('should not be empty', function () {
      expect(licenses).not.empty;
    });
  });

describe('createLicense', function () {
  describe('a license created without an object', function () {
    var license;

    before(function () {
      license = createLicense();
    });

    it('should have an empty url', function () {
      expect(license).to.have.property('url').empty;
    });

    it('should have an empty name', function () {
      expect(license).to.have.property('name').empty;
    });

    it('should have an empty id', function () {
      expect(license).to.have.property('id').empty;
    });
  });

  describe('a license created with a populated object', function () {
    var obj
      , license
      ;

    before(function () {
      obj = {
        'url': 'http://example.com',
        'title': 'Example License',
        'id': 'EL-1.0'
      };
      license = createLicense(obj);
    });

    it('should have the expected url', function () {
      expect(license.url).to.equal('http://example.com');
    });

    it('should have the expected name', function () {
      expect(license.name).to.equal('Example License');
    });

    it('should have the expected id', function () {
      expect(license.id).to.equal('EL-1.0');
    });
  });
});

describe('getLicense', function () {
  var index
    , license
    , id
    ;

  before(function () {
    index = Math.floor(Math.random() * licenses.length)
    license = licenses[index];
    id = license.id;
  });

  it('should return the expected license', function () {
    expect(getLicense(licenses, id).name).to.equal(license.title);
  });
});
