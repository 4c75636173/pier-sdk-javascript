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
    root.Pier.TransferenciaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaResponse model module.
   * @module model/TransferenciaResponse
   * @version 2.49.0
   */

  /**
   * Constructs a new <code>TransferenciaResponse</code>.
   * Objeto transferencia
   * @alias module:model/TransferenciaResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>TransferenciaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaResponse} obj Optional instance to populate.
   * @return {module:model/TransferenciaResponse} The populated <code>TransferenciaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('dataTransferencia')) {
        obj['dataTransferencia'] = ApiClient.convertToType(data['dataTransferencia'], 'String');
      }
      if (data.hasOwnProperty('idContaOrigem')) {
        obj['idContaOrigem'] = ApiClient.convertToType(data['idContaOrigem'], 'Integer');
      }
      if (data.hasOwnProperty('idContaDestino')) {
        obj['idContaDestino'] = ApiClient.convertToType(data['idContaDestino'], 'Integer');
      }
      if (data.hasOwnProperty('valorTransferencia')) {
        obj['valorTransferencia'] = ApiClient.convertToType(data['valorTransferencia'], 'Number');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Data estabelecida para ocorrer a transfer\u00C3\u00AAncia.
   * @member {String} dataTransferencia
   */
  exports.prototype['dataTransferencia'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id).
   * @member {Integer} idContaOrigem
   */
  exports.prototype['idContaOrigem'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id).
   * @member {Integer} idContaDestino
   */
  exports.prototype['idContaDestino'] = undefined;

  /**
   * Valor estabelecido para ser transferido.
   * @member {Number} valorTransferencia
   */
  exports.prototype['valorTransferencia'] = undefined;




  return exports;
}));
