'use strict';

var License = {
  initialize: function (obj) {
    obj = typeof obj !== 'undefined' ? obj : {};

    this.url = obj.url || '';
    this.name = obj.title || '';
    this.id = obj.id || '';
  }
}

module.exports = {
  licenses: require('./data/licenses'),

  createLicense: function (obj) {
    var license = Object.create(License);

    license.initialize(obj);

    return license;
  },

  getLicense: function (licenses, id) {
    var idx = 0
      , len = licenses.length
      , license = Object.create(License);
      ;

    for (; idx < len; idx += 1) {
      if (id === licenses[idx].id) {
        license.initialize(licenses[idx]);
        break;
      }
    }

    return license;
  }
}
