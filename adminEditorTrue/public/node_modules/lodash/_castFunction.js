define('node_modules/lodash/_castFunction', function(require, exports, module) {

  var identity = require('node_modules/lodash/identity');
  
  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }
  
  module.exports = castFunction;
  

});
