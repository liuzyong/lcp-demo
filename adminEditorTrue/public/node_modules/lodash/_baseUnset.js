define('node_modules/lodash/_baseUnset', function(require, exports, module) {

  var castPath = require('node_modules/lodash/_castPath'),
      last = require('node_modules/lodash/last'),
      parent = require('node_modules/lodash/_parent'),
      toKey = require('node_modules/lodash/_toKey');
  
  /**
   * The base implementation of `_.unset`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The property path to unset.
   * @returns {boolean} Returns `true` if the property is deleted, else `false`.
   */
  function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
  }
  
  module.exports = baseUnset;
  

});
