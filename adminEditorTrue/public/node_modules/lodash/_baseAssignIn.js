define('node_modules/lodash/_baseAssignIn', function(require, exports, module) {

  var copyObject = require('node_modules/lodash/_copyObject'),
      keysIn = require('node_modules/lodash/keysIn');
  
  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }
  
  module.exports = baseAssignIn;
  

});
