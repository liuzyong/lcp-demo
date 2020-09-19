define('node_modules/lodash/_flatRest', function(require, exports, module) {

  var flatten = require('node_modules/lodash/flatten'),
      overRest = require('node_modules/lodash/_overRest'),
      setToString = require('node_modules/lodash/_setToString');
  
  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }
  
  module.exports = flatRest;
  

});
