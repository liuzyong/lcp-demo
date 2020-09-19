define('node_modules/lodash/_baseRest', function(require, exports, module) {

  var identity = require('node_modules/lodash/identity'),
      overRest = require('node_modules/lodash/_overRest'),
      setToString = require('node_modules/lodash/_setToString');
  
  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }
  
  module.exports = baseRest;
  

});
