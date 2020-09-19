define('node_modules/lodash/_isIterateeCall', function(require, exports, module) {

  var eq = require('node_modules/lodash/eq'),
      isArrayLike = require('node_modules/lodash/isArrayLike'),
      isIndex = require('node_modules/lodash/_isIndex'),
      isObject = require('node_modules/lodash/isObject');
  
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }
  
  module.exports = isIterateeCall;
  

});
