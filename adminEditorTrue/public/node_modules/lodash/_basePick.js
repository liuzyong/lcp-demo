define('node_modules/lodash/_basePick', function(require, exports, module) {

  var basePickBy = require('node_modules/lodash/_basePickBy'),
      hasIn = require('node_modules/lodash/hasIn');
  
  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return basePickBy(object, paths, function(value, path) {
      return hasIn(object, path);
    });
  }
  
  module.exports = basePick;
  

});
