(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoPayKeyUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CartaoPayKeyUpdate model module.
   * @module model/CartaoPayKeyUpdate
   * @version 2.54.1
   */

  /**
   * Constructs a new <code>CartaoPayKeyUpdate</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso de atualiza\u00C3\u00A7\u00C3\u00A3o de chave
   * @alias module:model/CartaoPayKeyUpdate
   * @class
   * @param chaveCriptograma
   */
  var exports = function(chaveCriptograma) {

    this['chaveCriptograma'] = chaveCriptograma;
  };

  /**
   * Constructs a <code>CartaoPayKeyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartaoPayKeyUpdate} obj Optional instance to populate.
   * @return {module:model/CartaoPayKeyUpdate} The populated <code>CartaoPayKeyUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('chaveCriptograma')) {
        obj['chaveCriptograma'] = ApiClient.convertToType(data['chaveCriptograma'], 'String');
      }
    }
    return obj;
  }


  /**
   * Chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o criptografada
   * @member {String} chaveCriptograma
   */
  exports.prototype['chaveCriptograma'] = undefined;




  return exports;
}));
