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
    root.Pier.CodigoSegurancaSMSPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CodigoSegurancaSMSPersist model module.
   * @module model/CodigoSegurancaSMSPersist
   * @version 2.49.5
   */

  /**
   * Constructs a new <code>CodigoSegurancaSMSPersist</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da requisi\u00C3\u00A7\u00C3\u00A3o do recurso gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @alias module:model/CodigoSegurancaSMSPersist
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CodigoSegurancaSMSPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodigoSegurancaSMSPersist} obj Optional instance to populate.
   * @return {module:model/CodigoSegurancaSMSPersist} The populated <code>CodigoSegurancaSMSPersist</code> instance.
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
    }
    return obj;
  }


  /**
   * DDD do n\u00C3\u00BAmero de telefone para envio do sms.
   * @member {String} ddd
   */
  exports.prototype['ddd'] = undefined;

  /**
   * N\u00C3\u00BAmero do telefone para envio do sms.
   * @member {String} telefone
   */
  exports.prototype['telefone'] = undefined;




  return exports;
}));
