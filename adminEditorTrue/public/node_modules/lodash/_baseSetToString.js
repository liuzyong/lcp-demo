define('node_modules/lodash/_baseSetToString', function(require, exports, module) {

  var constant = require('node_modules/lodash/constant'),
      defineProperty = require('node_modules/lodash/_defineProperty'),
      identity = require('node_modules/lodash/identity');
  
  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };
  
  module.exports = baseSetToString;
  

});
