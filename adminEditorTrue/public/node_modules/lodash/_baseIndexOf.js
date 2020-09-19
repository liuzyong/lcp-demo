define('node_modules/lodash/_baseIndexOf', function(require, exports, module) {

  var baseFindIndex = require('node_modules/lodash/_baseFindIndex'),
      baseIsNaN = require('node_modules/lodash/_baseIsNaN'),
      strictIndexOf = require('node_modules/lodash/_strictIndexOf');
  
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  
  module.exports = baseIndexOf;
  

});
