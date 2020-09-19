define('node_modules/lodash/_initCloneObject', function(require, exports, module) {

  var baseCreate = require('node_modules/lodash/_baseCreate'),
      getPrototype = require('node_modules/lodash/_getPrototype'),
      isPrototype = require('node_modules/lodash/_isPrototype');
  
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }
  
  module.exports = initCloneObject;
  

});
