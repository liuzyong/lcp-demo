define('node_modules/lodash/_Stack', function(require, exports, module) {

  var ListCache = require('node_modules/lodash/_ListCache'),
      stackClear = require('node_modules/lodash/_stackClear'),
      stackDelete = require('node_modules/lodash/_stackDelete'),
      stackGet = require('node_modules/lodash/_stackGet'),
      stackHas = require('node_modules/lodash/_stackHas'),
      stackSet = require('node_modules/lodash/_stackSet');
  
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  
  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  
  module.exports = Stack;
  

});
