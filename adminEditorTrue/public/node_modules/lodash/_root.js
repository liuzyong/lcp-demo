define('node_modules/lodash/_root', function(require, exports, module) {

  var freeGlobal = require('node_modules/lodash/_freeGlobal');
  
  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  
  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();
  
  module.exports = root;
  

});
