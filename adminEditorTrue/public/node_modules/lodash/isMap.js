define('node_modules/lodash/isMap', function(require, exports, module) {

  var baseIsMap = require('node_modules/lodash/_baseIsMap'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      nodeUtil = require('node_modules/lodash/_nodeUtil');
  
  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  
  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  
  module.exports = isMap;
  

});
