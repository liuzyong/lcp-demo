define('node_modules/lodash/union', function(require, exports, module) {

  var baseFlatten = require('node_modules/lodash/_baseFlatten'),
      baseRest = require('node_modules/lodash/_baseRest'),
      baseUniq = require('node_modules/lodash/_baseUniq'),
      isArrayLikeObject = require('node_modules/lodash/isArrayLikeObject');
  
  /**
   * Creates an array of unique values, in order, from all given arrays using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.union([2], [1, 2]);
   * // => [2, 1]
   */
  var union = baseRest(function(arrays) {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
  });
  
  module.exports = union;
  

});
