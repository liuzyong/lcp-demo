define('node_modules/lodash/_getData', function(require, exports, module) {

  var metaMap = require('node_modules/lodash/_metaMap'),
      noop = require('node_modules/lodash/noop');
  
  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };
  
  module.exports = getData;
  

});
