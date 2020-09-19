define('node_modules/lodash/_baseInvoke', function(require, exports, module) {

  var apply = require('node_modules/lodash/_apply'),
      castPath = require('node_modules/lodash/_castPath'),
      last = require('node_modules/lodash/last'),
      parent = require('node_modules/lodash/_parent'),
      toKey = require('node_modules/lodash/_toKey');
  
  /**
   * The base implementation of `_.invoke` without support for individual
   * method arguments.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the method to invoke.
   * @param {Array} args The arguments to invoke the method with.
   * @returns {*} Returns the result of the invoked method.
   */
  function baseInvoke(object, path, args) {
    path = castPath(path, object);
    object = parent(object, path);
    var func = object == null ? object : object[toKey(last(path))];
    return func == null ? undefined : apply(func, object, args);
  }
  
  module.exports = baseInvoke;
  

});
