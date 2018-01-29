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
   * @version 2.50.17
   */

  /**
   * Constructs a new <code>PlanoParcelamentoTransferenciaCreditoContaBancariaResponse</code>.
   * Plano de Parcelamentos para Transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para contas banc\u00C3\u00A1rias
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
   * N\u00C3\u00BAmero do Cart\u00C3\u00A3o que originou a transa\u00C3\u00A7\u00C3\u00A3o em formato mascarado.
   * @member {String} numeroMascaradoCartao
   */
  exports.prototype['numeroMascaradoCartao'] = undefined;

  /**
   * Data de vencimento da primeira parcela.
   * @member {String} vencimentoPrimeiraParcela
   */
  exports.prototype['vencimentoPrimeiraParcela'] = undefined;

  /**
   * Valor da solicita\u00C3\u00A7\u00C3\u00A3o de saque.
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * N\u00C3\u00BAmero de meses para car\u00C3\u00AAncia.
   * @member {Integer} numeroMesesCarencia
   */
  exports.prototype['numeroMesesCarencia'] = undefined;

  /**
   * Lista com os planos de parcelamento.
   * @member {Array.<module:model/ParcelamentoTransferenciaResponse>} parcelas
   */
  exports.prototype['parcelas'] = undefined;




  return exports;
}));
