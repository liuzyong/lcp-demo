define('node_modules/lodash/_isFlattenable', function(require, exports, module) {

  var Symbol = require('node_modules/lodash/_Symbol'),
      isArguments = require('node_modules/lodash/isArguments'),
      isArray = require('node_modules/lodash/isArray');
  
  /** Built-in value references. */
  var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
  
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) ||
      !!(spreadableSymbol && value && value[spreadableSymbol]);
  }
  
  module.exports = isFlattenable;
  

});
