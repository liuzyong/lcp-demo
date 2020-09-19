define('node_modules/lodash/_isLaziable', function(require, exports, module) {

  var LazyWrapper = require('node_modules/lodash/_LazyWrapper'),
      getData = require('node_modules/lodash/_getData'),
      getFuncName = require('node_modules/lodash/_getFuncName'),
      lodash = require('node_modules/lodash/wrapperLodash');
  
  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */
  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];
  
    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }
  
  module.exports = isLaziable;
  

});
