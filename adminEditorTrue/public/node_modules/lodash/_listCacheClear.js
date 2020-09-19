define('node_modules/lodash/_listCacheClear', function(require, exports, module) {

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  
  module.exports = listCacheClear;
  

});
