define('node_modules/lodash/_createSet', function(require, exports, module) {

  var Set = require('node_modules/lodash/_Set'),
      noop = require('node_modules/lodash/noop'),
      setToArray = require('node_modules/lodash/_setToArray');
  
  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;
  
  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
    return new Set(values);
  };
  
  module.exports = createSet;
  

});
