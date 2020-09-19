define('node_modules/lodash/_baseIsNaN', function(require, exports, module) {

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }
  
  module.exports = baseIsNaN;
  

});
