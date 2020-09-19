define('node_modules/lodash/_nativeCreate', function(require, exports, module) {

  var getNative = require('node_modules/lodash/_getNative');
  
  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');
  
  module.exports = nativeCreate;
  

});
