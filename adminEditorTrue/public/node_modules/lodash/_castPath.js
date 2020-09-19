define('node_modules/lodash/_castPath', function(require, exports, module) {

  var isArray = require('node_modules/lodash/isArray'),
      isKey = require('node_modules/lodash/_isKey'),
      stringToPath = require('node_modules/lodash/_stringToPath'),
      toString = require('node_modules/lodash/toString');
  
  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }
  
  module.exports = castPath;
  

});
