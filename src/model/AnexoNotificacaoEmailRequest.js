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
    root.Pier.AnexoNotificacaoEmailRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnexoNotificacaoEmailRequest model module.
   * @module model/AnexoNotificacaoEmailRequest
   * @version 2.50.15
   */

  /**
   * Constructs a new <code>AnexoNotificacaoEmailRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o de um documento anexo para uma notifica\u00C3\u00A7\u00C3\u00A3o.
   * @alias module:model/AnexoNotificacaoEmailRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AnexoNotificacaoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnexoNotificacaoEmailRequest} obj Optional instance to populate.
   * @return {module:model/AnexoNotificacaoEmailRequest} The populated <code>AnexoNotificacaoEmailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idDocumento')) {
        obj['idDocumento'] = ApiClient.convertToType(data['idDocumento'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * ID do documento que ser\u00C3\u00A1 anexado a notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idDocumento
   */
  exports.prototype['idDocumento'] = undefined;




  return exports;
}));
