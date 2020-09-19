define('node_modules/lodash/_mapCacheGet', function(require, exports, module) {

  var getMapData = require('node_modules/lodash/_getMapData');
  
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  
  module.exports = mapCacheGet;
  

});
