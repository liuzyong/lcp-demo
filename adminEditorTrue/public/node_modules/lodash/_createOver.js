define('node_modules/lodash/_createOver', function(require, exports, module) {

  var apply = require('node_modules/lodash/_apply'),
      arrayMap = require('node_modules/lodash/_arrayMap'),
      baseIteratee = require('node_modules/lodash/_baseIteratee'),
      baseRest = require('node_modules/lodash/_baseRest'),
      baseUnary = require('node_modules/lodash/_baseUnary'),
      flatRest = require('node_modules/lodash/_flatRest');
  
  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new over function.
   */
  function createOver(arrayFunc) {
    return flatRest(function(iteratees) {
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      return baseRest(function(args) {
        var thisArg = this;
        return arrayFunc(iteratees, function(iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }
  
  module.exports = createOver;
  

});
