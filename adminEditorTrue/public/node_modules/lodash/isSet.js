define('node_modules/lodash/isSet', function(require, exports, module) {

  var baseIsSet = require('node_modules/lodash/_baseIsSet'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      nodeUtil = require('node_modules/lodash/_nodeUtil');
  
  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  
  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  
  module.exports = isSet;
  

});
