define('node_modules/lodash/_SetCache', function(require, exports, module) {

  var MapCache = require('node_modules/lodash/_MapCache'),
      setCacheAdd = require('node_modules/lodash/_setCacheAdd'),
      setCacheHas = require('node_modules/lodash/_setCacheHas');
  
  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
  
    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }
  
  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  
  module.exports = SetCache;
  

});
