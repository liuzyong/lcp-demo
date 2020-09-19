define('node_modules/lodash/toPath', function(require, exports, module) {

  var arrayMap = require('node_modules/lodash/_arrayMap'),
      copyArray = require('node_modules/lodash/_copyArray'),
      isArray = require('node_modules/lodash/isArray'),
      isSymbol = require('node_modules/lodash/isSymbol'),
      stringToPath = require('node_modules/lodash/_stringToPath'),
      toKey = require('node_modules/lodash/_toKey'),
      toString = require('node_modules/lodash/toString');
  
  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */
  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }
    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }
  
  module.exports = toPath;
  

});
