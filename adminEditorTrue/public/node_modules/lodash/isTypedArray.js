define('node_modules/lodash/isTypedArray', function(require, exports, module) {

  var baseIsTypedArray = require('node_modules/lodash/_baseIsTypedArray'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      nodeUtil = require('node_modules/lodash/_nodeUtil');
  
  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  
  module.exports = isTypedArray;
  

});
