define('node_modules/lodash/_copySymbols', function(require, exports, module) {

  var copyObject = require('node_modules/lodash/_copyObject'),
      getSymbols = require('node_modules/lodash/_getSymbols');
  
  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  
  module.exports = copySymbols;
  

});
