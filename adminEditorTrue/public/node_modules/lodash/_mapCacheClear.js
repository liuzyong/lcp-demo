define('node_modules/lodash/_mapCacheClear', function(require, exports, module) {

  var Hash = require('node_modules/lodash/_Hash'),
      ListCache = require('node_modules/lodash/_ListCache'),
      Map = require('node_modules/lodash/_Map');
  
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }
  
  module.exports = mapCacheClear;
  

});
