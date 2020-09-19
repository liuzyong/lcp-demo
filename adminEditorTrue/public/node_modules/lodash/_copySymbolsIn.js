define('node_modules/lodash/_copySymbolsIn', function(require, exports, module) {

  var copyObject = require('node_modules/lodash/_copyObject'),
      getSymbolsIn = require('node_modules/lodash/_getSymbolsIn');
  
  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }
  
  module.exports = copySymbolsIn;
  

});
