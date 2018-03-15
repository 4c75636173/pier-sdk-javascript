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
    root.Pier.TransferenciaCreditoContaBancariaListaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransferenciaCreditoContaBancariaListaResponse model module.
   * @module model/TransferenciaCreditoContaBancariaListaResponse
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TransferenciaCreditoContaBancariaListaResponse</code>.
   * Listagem de Transfer\u00EAncia de cr\u00E9dito para contas banc\u00E1rias
   * @alias module:model/TransferenciaCreditoContaBancariaListaResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TransferenciaCreditoContaBancariaListaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferenciaCreditoContaBancariaListaResponse} obj Optional instance to populate.
   * @return {module:model/TransferenciaCreditoContaBancariaListaResponse} The populated <code>TransferenciaCreditoContaBancariaListaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idTransferencia')) {
        obj['idTransferencia'] = ApiClient.convertToType(data['idTransferencia'], 'Integer');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('valorCompra')) {
        obj['valorCompra'] = ApiClient.convertToType(data['valorCompra'], 'Number');
      }
      if (data.hasOwnProperty('valorContrato')) {
        obj['valorContrato'] = ApiClient.convertToType(data['valorContrato'], 'Number');
      }
      if (data.hasOwnProperty('dataCompra')) {
        obj['dataCompra'] = ApiClient.convertToType(data['dataCompra'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Integer');
      }
      if (data.hasOwnProperty('statusProcessamento')) {
        obj['statusProcessamento'] = ApiClient.convertToType(data['statusProcessamento'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00F3digo de identifica\u00E7\u00E3o da transferencia.
   * @member {Integer} idTransferencia
   */
  exports.prototype['idTransferencia'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o da conta.
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * C\u00F3digo de identifica\u00E7\u00E3o do cart\u00E3o.
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Valor da transfer\u00EAncia.
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * Valor da transfer\u00EAncia acrescido do valor da tarifa de saque se houver tarifa de saque.
   * @member {Number} valorContrato
   */
  exports.prototype['valorContrato'] = undefined;

  /**
   * Data da transfer\u00EAncia.
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * C\u00F3digo de status de processamento.
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * Status Processamento.
   * @member {String} statusProcessamento
   */
  exports.prototype['statusProcessamento'] = undefined;




  return exports;
}));
