(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PlanoParcelamentoTransferenciaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PlanoParcelamentoTransferenciaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PlanoParcelamentoTransferenciaCreditoContaBancariaResponse = factory(root.Pier.ApiClient, root.Pier.PlanoParcelamentoTransferenciaResponse);
  }
}(this, function(ApiClient, PlanoParcelamentoTransferenciaResponse) {
  'use strict';

  /**
   * The PlanoParcelamentoTransferenciaCreditoContaBancariaResponse model module.
   * @module model/PlanoParcelamentoTransferenciaCreditoContaBancariaResponse
   * @version 2.50.4
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

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('numeroMascaradoCartao')) {
        obj['numeroMascaradoCartao'] = ApiClient.convertToType(data['numeroMascaradoCartao'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('planoParcelamentos')) {
        obj['planoParcelamentos'] = ApiClient.convertToType(data['planoParcelamentos'], [PlanoParcelamentoTransferenciaResponse]);
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema que a originou.
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * N\u00C3\u00BAmero do Cart\u00C3\u00A3o que originou a transa\u00C3\u00A7\u00C3\u00A3o em formato mascarado.
   * @member {String} numeroMascaradoCartao
   */
  exports.prototype['numeroMascaradoCartao'] = undefined;

  /**
   * Apresenta a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * Lista os planos de parcelamentos
   * @member {Array.<module:model/PlanoParcelamentoTransferenciaResponse>} planoParcelamentos
   */
  exports.prototype['planoParcelamentos'] = undefined;




  return exports;
}));
