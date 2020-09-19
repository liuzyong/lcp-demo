define('node_modules/lodash/_stringToArray', function(require, exports, module) {

  var asciiToArray = require('node_modules/lodash/_asciiToArray'),
      hasUnicode = require('node_modules/lodash/_hasUnicode'),
      unicodeToArray = require('node_modules/lodash/_unicodeToArray');
  
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }
  
  module.exports = stringToArray;
  

});
