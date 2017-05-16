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
    root.Pier.DesfazimentoTransacaoOnURequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DesfazimentoTransacaoOnURequest model module.
   * @module model/DesfazimentoTransacaoOnURequest
   * @version 2.15.0
   */

  /**
   * Constructs a new <code>DesfazimentoTransacaoOnURequest</code>.
   * Objeto de Requisi\u00C3\u00A7\u00C3\u00A3o de Desfazimento de transa\u00C3\u00A7\u00C3\u00A3o
   * @alias module:model/DesfazimentoTransacaoOnURequest
   * @class
   */
  var exports = function() {












  };

  /**
   * Constructs a <code>DesfazimentoTransacaoOnURequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DesfazimentoTransacaoOnURequest} obj Optional instance to populate.
   * @return {module:model/DesfazimentoTransacaoOnURequest} The populated <code>DesfazimentoTransacaoOnURequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroRealCartao')) {
        obj['numeroRealCartao'] = ApiClient.convertToType(data['numeroRealCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidadeCartao')) {
        obj['dataValidadeCartao'] = ApiClient.convertToType(data['dataValidadeCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTerminal')) {
        obj['dataHoraTerminal'] = ApiClient.convertToType(data['dataHoraTerminal'], 'Date');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('nsuOrigemTransacaoCancelada')) {
        obj['nsuOrigemTransacaoCancelada'] = ApiClient.convertToType(data['nsuOrigemTransacaoCancelada'], 'String');
      }
      if (data.hasOwnProperty('dataHoraTransacaoCancelada')) {
        obj['dataHoraTransacaoCancelada'] = ApiClient.convertToType(data['dataHoraTransacaoCancelada'], 'Date');
      }
      if (data.hasOwnProperty('codigoTransacaoCancelada')) {
        obj['codigoTransacaoCancelada'] = ApiClient.convertToType(data['codigoTransacaoCancelada'], 'String');
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
   * C\u00C3\u00B3digo de Processamento que identifica o Tipo da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o com duas casas decimais para os centavos.
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * N\u00C3\u00BAmero Real do Cart\u00C3\u00A3o.
   * @member {String} numeroRealCartao
   */
  exports.prototype['numeroRealCartao'] = undefined;

  /**
   * Data de Validade do Cart\u00C3\u00A3o. Ex: AAMM
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * N\u00C3\u00BAmero do Estabelecimento (N\u00C3\u00BAmero+DV).
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * Apresenta a data e hora local da consulta yyyy-MM-dd'T'HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00
   * @member {Date} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * Apresenta a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema a ser cancelada.
   * @member {String} nsuOrigemTransacaoCancelada
   */
  exports.prototype['nsuOrigemTransacaoCancelada'] = undefined;

  /**
   * Apresenta a data e hora local da transa\u00C3\u00A7\u00C3\u00A3o a ser cancelada yyyy-MM-dd'T'HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00
   * @member {Date} dataHoraTransacaoCancelada
   */
  exports.prototype['dataHoraTransacaoCancelada'] = undefined;

  /**
   * C\u00C3\u00B3digo de Processamento da transa\u00C3\u00A7\u00C3\u00A3o cancelada.
   * @member {String} codigoTransacaoCancelada
   */
  exports.prototype['codigoTransacaoCancelada'] = undefined;




  return exports;
}));
