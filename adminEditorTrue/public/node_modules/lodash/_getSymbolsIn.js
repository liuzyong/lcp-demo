define('node_modules/lodash/_getSymbolsIn', function(require, exports, module) {

  var arrayPush = require('node_modules/lodash/_arrayPush'),
      getPrototype = require('node_modules/lodash/_getPrototype'),
      getSymbols = require('node_modules/lodash/_getSymbols'),
      stubArray = require('node_modules/lodash/stubArray');
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  
  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };
  
  module.exports = getSymbolsIn;
  

});
