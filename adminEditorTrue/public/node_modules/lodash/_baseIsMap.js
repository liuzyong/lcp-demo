define('node_modules/lodash/_baseIsMap', function(require, exports, module) {

  var getTag = require('node_modules/lodash/_getTag'),
      isObjectLike = require('node_modules/lodash/isObjectLike');
  
  /** `Object#toString` result references. */
  var mapTag = '[object Map]';
  
  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }
  
  module.exports = baseIsMap;
  

});
