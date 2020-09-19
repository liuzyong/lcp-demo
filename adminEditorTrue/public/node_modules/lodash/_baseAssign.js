define('node_modules/lodash/_baseAssign', function(require, exports, module) {

  var copyObject = require('node_modules/lodash/_copyObject'),
      keys = require('node_modules/lodash/keys');
  
  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  
  module.exports = baseAssign;
  

});
