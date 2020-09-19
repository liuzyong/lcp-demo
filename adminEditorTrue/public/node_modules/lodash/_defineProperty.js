define('node_modules/lodash/_defineProperty', function(require, exports, module) {

  var getNative = require('node_modules/lodash/_getNative');
  
  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());
  
  module.exports = defineProperty;
  

});
