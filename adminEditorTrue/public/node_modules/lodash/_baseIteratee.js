define('node_modules/lodash/_baseIteratee', function(require, exports, module) {

  var baseMatches = require('node_modules/lodash/_baseMatches'),
      baseMatchesProperty = require('node_modules/lodash/_baseMatchesProperty'),
      identity = require('node_modules/lodash/identity'),
      isArray = require('node_modules/lodash/isArray'),
      property = require('node_modules/lodash/property');
  
  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }
  
  module.exports = baseIteratee;
  

});
