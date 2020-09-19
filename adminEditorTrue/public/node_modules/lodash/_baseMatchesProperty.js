define('node_modules/lodash/_baseMatchesProperty', function(require, exports, module) {

  var baseIsEqual = require('node_modules/lodash/_baseIsEqual'),
      get = require('node_modules/lodash/get'),
      hasIn = require('node_modules/lodash/hasIn'),
      isKey = require('node_modules/lodash/_isKey'),
      isStrictComparable = require('node_modules/lodash/_isStrictComparable'),
      matchesStrictComparable = require('node_modules/lodash/_matchesStrictComparable'),
      toKey = require('node_modules/lodash/_toKey');
  
  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;
  
  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  
  module.exports = baseMatchesProperty;
  

});
