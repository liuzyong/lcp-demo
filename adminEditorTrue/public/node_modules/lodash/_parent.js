define('node_modules/lodash/_parent', function(require, exports, module) {

  var baseGet = require('node_modules/lodash/_baseGet'),
      baseSlice = require('node_modules/lodash/_baseSlice');
  
  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */
  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }
  
  module.exports = parent;
  

});
