define('node_modules/lodash/_nativeKeys', function(require, exports, module) {

  var overArg = require('node_modules/lodash/_overArg');
  
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);
  
  module.exports = nativeKeys;
  

});
