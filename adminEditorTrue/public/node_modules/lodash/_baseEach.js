define('node_modules/lodash/_baseEach', function(require, exports, module) {

  var baseForOwn = require('node_modules/lodash/_baseForOwn'),
      createBaseEach = require('node_modules/lodash/_createBaseEach');
  
  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);
  
  module.exports = baseEach;
  

});
