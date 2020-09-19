define('node_modules/lodash/_freeGlobal', function(require, exports, module) {

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  
  module.exports = freeGlobal;
  

});
