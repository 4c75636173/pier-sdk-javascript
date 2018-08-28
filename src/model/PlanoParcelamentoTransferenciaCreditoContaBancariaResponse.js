(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ParcelamentoTransferenciaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ParcelamentoTransferenciaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaResponse = factory(root.Pier.ApiClient, root.Pier.ParcelamentoTransferenciaResponse);
  }
}(this, function(ApiClient, ParcelamentoTransferenciaResponse) {
  'use strict';

  /**
   * The PlanoParcelamentoTransferenciaCreditoContaBancariaResponse model module.
   * @module model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>PlanoParcelamentoTransferenciaCreditoContaBancariaResponse</code>.
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_description}}}
   * @alias module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>PlanoParcelamentoTransferenciaCreditoContaBancariaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse} obj Optional instance to populate.
   * @return {module:model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse} The populated <code>PlanoParcelamentoTransferenciaCreditoContaBancariaResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('numeroMascaradoCartao')) {
        obj['numeroMascaradoCartao'] = ApiClient.convertToType(data['numeroMascaradoCartao'], 'String');
      }
      if (data.hasOwnProperty('vencimentoPrimeiraParcela')) {
        obj['vencimentoPrimeiraParcela'] = ApiClient.convertToType(data['vencimentoPrimeiraParcela'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroMesesCarencia')) {
        obj['numeroMesesCarencia'] = ApiClient.convertToType(data['numeroMesesCarencia'], 'Integer');
      }
      if (data.hasOwnProperty('parcelas')) {
        obj['parcelas'] = ApiClient.convertToType(data['parcelas'], [ParcelamentoTransferenciaResponse]);
      }
    }
    return obj;
  }


  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_numero_mascarado_cartao_value}}}
   * @member {String} numeroMascaradoCartao
   */
  exports.prototype['numeroMascaradoCartao'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_vencimento_primeira_parcela_value}}}
   * @member {String} vencimentoPrimeiraParcela
   */
  exports.prototype['vencimentoPrimeiraParcela'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_numero_meses_carencia_value}}}
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * {{{plano_parcelamento_transferencia_credito_conta_bancaria_response_parcelas_value}}}
   * @member {Array.<module:model/ParcelamentoTransferenciaResponse>} parcelas
   */
  exports.prototype['parcelas'] = undefined;




  return exports;
}));
