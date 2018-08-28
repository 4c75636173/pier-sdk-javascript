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
    root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PlanoParcelamentoTransferenciaCreditoContaBancariaRequest model module.
   * @module model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code>.
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_request_description}}}
   * @alias module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest
   * @class
   * @param idCartao
   * @param valorTransacao
   * @param numeroMesesCarencia
   */
  var exports = function(idCartao, valorTransacao, numeroMesesCarencia) {

    this['idCartao'] = idCartao;
    this['valorTransacao'] = valorTransacao;
    this['numeroMesesCarencia'] = numeroMesesCarencia;
  };

  /**
   * Constructs a <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaRequest} The populated <code>PlanoParcelamentoTransferenciaCreditoContaBancariaRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_request_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_request_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_request_numero_meses_carencia_value}}}
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;




  return exports;
}));
