define('node_modules/lodash/_createCaseFirst', function(require, exports, module) {

  var castSlice = require('node_modules/lodash/_castSlice'),
      hasUnicode = require('node_modules/lodash/_hasUnicode'),
      stringToArray = require('node_modules/lodash/_stringToArray'),
      toString = require('node_modules/lodash/toString');
  
  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString(string);
  
      var strSymbols = hasUnicode(string)
        ? stringToArray(string)
        : undefined;
  
      var chr = strSymbols
        ? strSymbols[0]
        : string.charAt(0);
  
      var trailing = strSymbols
        ? castSlice(strSymbols, 1).join('')
        : string.slice(1);
  
      return chr[methodName]() + trailing;
    };
  }
  
  module.exports = createCaseFirst;
  

});
