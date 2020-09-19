define('node_modules/lodash/_MapCache', function(require, exports, module) {

  var mapCacheClear = require('node_modules/lodash/_mapCacheClear'),
      mapCacheDelete = require('node_modules/lodash/_mapCacheDelete'),
      mapCacheGet = require('node_modules/lodash/_mapCacheGet'),
      mapCacheHas = require('node_modules/lodash/_mapCacheHas'),
      mapCacheSet = require('node_modules/lodash/_mapCacheSet');
  
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
  
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  
  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  
  module.exports = MapCache;
  

});
