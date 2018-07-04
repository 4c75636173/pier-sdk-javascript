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
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>TransferenciaCreditoContaBancariaListaResponse</code>.
   * {{{transferencia_credito_conta_bancaria_lista_response_description}}}
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
   * {{{transferencia_credito_conta_bancaria_lista_response_id_transferencia_value}}}
   * @member {Integer} idTransferencia
   */
  exports.prototype['idTransferencia'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_valor_compra_value}}}
   * @member {Number} valorCompra
   */
  exports.prototype['valorCompra'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_valor_contrato_value}}}
   * @member {Number} valorContrato
   */
  exports.prototype['valorContrato'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_data_compra_value}}}
   * @member {String} dataCompra
   */
  exports.prototype['dataCompra'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_status_value}}}
   * @member {Integer} status
   */
  exports.prototype['status'] = undefined;

  /**
   * {{{transferencia_credito_conta_bancaria_lista_response_status_processamento_value}}}
   * @member {String} statusProcessamento
   */
  exports.prototype['statusProcessamento'] = undefined;




  return exports;
}));
