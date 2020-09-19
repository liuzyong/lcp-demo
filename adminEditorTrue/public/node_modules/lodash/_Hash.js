define('node_modules/lodash/_Hash', function(require, exports, module) {

  var hashClear = require('node_modules/lodash/_hashClear'),
      hashDelete = require('node_modules/lodash/_hashDelete'),
      hashGet = require('node_modules/lodash/_hashGet'),
      hashHas = require('node_modules/lodash/_hashHas'),
      hashSet = require('node_modules/lodash/_hashSet');
  
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  
  module.exports = Hash;
  

});
