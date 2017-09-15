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
    root.Pier.CodigoSegurancaSMSRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CodigoSegurancaSMSRequest model module.
   * @module model/CodigoSegurancaSMSRequest
   * @version 2.32.0
   */

  /**
   * Constructs a new <code>CodigoSegurancaSMSRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @alias module:model/CodigoSegurancaSMSRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>CodigoSegurancaSMSRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodigoSegurancaSMSRequest} obj Optional instance to populate.
   * @return {module:model/CodigoSegurancaSMSRequest} The populated <code>CodigoSegurancaSMSRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('ddd')) {
        obj['ddd'] = ApiClient.convertToType(data['ddd'], 'String');
      }
      if (data.hasOwnProperty('telefone')) {
        obj['telefone'] = ApiClient.convertToType(data['telefone'], 'String');
      }
      if (data.hasOwnProperty('codigoSeguranca')) {
        obj['codigoSeguranca'] = ApiClient.convertToType(data['codigoSeguranca'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo DDD do telefone (id).
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00C3\u00BAmero do telefone.
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;

  /**
   * Token para valida\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoSeguranca
   */
  exports.prototype['codigoSeguranca'] = undefined;




  return exports;
}));
