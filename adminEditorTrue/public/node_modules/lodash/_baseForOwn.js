define('node_modules/lodash/_baseForOwn', function(require, exports, module) {

  var baseFor = require('node_modules/lodash/_baseFor'),
      keys = require('node_modules/lodash/keys');
  
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  
  module.exports = baseForOwn;
  

});
