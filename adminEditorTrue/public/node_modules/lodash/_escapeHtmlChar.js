define('node_modules/lodash/_escapeHtmlChar', function(require, exports, module) {

  var basePropertyOf = require('node_modules/lodash/_basePropertyOf');
  
  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);
  
  module.exports = escapeHtmlChar;
  

});
