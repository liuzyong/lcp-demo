define('node_modules/lodash/_basePickBy', function(require, exports, module) {

  var baseGet = require('node_modules/lodash/_baseGet'),
      baseSet = require('node_modules/lodash/_baseSet'),
      castPath = require('node_modules/lodash/_castPath');
  
  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
        length = paths.length,
        result = {};
  
    while (++index < length) {
      var path = paths[index],
          value = baseGet(object, path);
  
      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }
    return result;
  }
  
  module.exports = basePickBy;
  

});
