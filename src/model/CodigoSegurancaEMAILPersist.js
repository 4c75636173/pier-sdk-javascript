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
    root.Pier.CodigoSegurancaEMAILPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CodigoSegurancaEMAILPersist model module.
   * @module model/CodigoSegurancaEMAILPersist
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>CodigoSegurancaEMAILPersist</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @alias module:model/CodigoSegurancaEMAILPersist
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>CodigoSegurancaEMAILPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodigoSegurancaEMAILPersist} obj Optional instance to populate.
   * @return {module:model/CodigoSegurancaEMAILPersist} The populated <code>CodigoSegurancaEMAILPersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('codigoSeguranca')) {
        obj['codigoSeguranca'] = ApiClient.convertToType(data['codigoSeguranca'], 'String');
      }
    }
    return obj;
  }


  /**
   * E-mail usado para envio do c\u00C3\u00B3digo de seguran\u00C3\u00A7a.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * Token para valida\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoSeguranca
   */
  exports.prototype['codigoSeguranca'] = undefined;




  return exports;
}));
