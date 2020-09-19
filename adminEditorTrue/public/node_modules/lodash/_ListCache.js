define('node_modules/lodash/_ListCache', function(require, exports, module) {

  var listCacheClear = require('node_modules/lodash/_listCacheClear'),
      listCacheDelete = require('node_modules/lodash/_listCacheDelete'),
      listCacheGet = require('node_modules/lodash/_listCacheGet'),
      listCacheHas = require('node_modules/lodash/_listCacheHas'),
      listCacheSet = require('node_modules/lodash/_listCacheSet');
  
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  
  module.exports = ListCache;
  

});
