define('node_modules/lodash/_cloneDataView', function(require, exports, module) {

  var cloneArrayBuffer = require('node_modules/lodash/_cloneArrayBuffer');
  
  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  
  module.exports = cloneDataView;
  

});
