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
    root.Pier.CancelamentoTransacaoPorIdCartaoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CancelamentoTransacaoPorIdCartaoRequest model module.
   * @module model/CancelamentoTransacaoPorIdCartaoRequest
   * @version 2.54.5
   */

  /**
   * Constructs a new <code>CancelamentoTransacaoPorIdCartaoRequest</code>.
   * Objeto de Requisi\u00C3\u00A7\u00C3\u00A3o de Cancelamento de transa\u00C3\u00A7\u00C3\u00A3o por idCartao
   * @alias module:model/CancelamentoTransacaoPorIdCartaoRequest
   * @class
   * @param nsuOrigem
   * @param nsuOrigemTransacaoCancelada
   * @param codigoProcessamento
   * @param dataHoraTransacaoCancelada
   * @param nsuAutorizacaoTransacaoCancelada
   * @param valorTransacao
   * @param numeroEstabelecimento
   * @param dataHoraTerminal
   * @param terminalRequisitante
   * @param numeroParcelas
   */
  var exports = function(nsuOrigem, nsuOrigemTransacaoCancelada, codigoProcessamento, dataHoraTransacaoCancelada, nsuAutorizacaoTransacaoCancelada, valorTransacao, numeroEstabelecimento, dataHoraTerminal, terminalRequisitante, numeroParcelas) {

    this['nsuOrigem'] = nsuOrigem;
    this['nsuOrigemTransacaoCancelada'] = nsuOrigemTransacaoCancelada;
    this['codigoProcessamento'] = codigoProcessamento;
    this['dataHoraTransacaoCancelada'] = dataHoraTransacaoCancelada;
    this['nsuAutorizacaoTransacaoCancelada'] = nsuAutorizacaoTransacaoCancelada;
    this['valorTransacao'] = valorTransacao;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
    this['dataHoraTerminal'] = dataHoraTerminal;
    this['terminalRequisitante'] = terminalRequisitante;
    this['numeroParcelas'] = numeroParcelas;
  };

  /**
   * Constructs a <code>CancelamentoTransacaoPorIdCartaoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelamentoTransacaoPorIdCartaoRequest} obj Optional instance to populate.
   * @return {module:model/CancelamentoTransacaoPorIdCartaoRequest} The populated <code>CancelamentoTransacaoPorIdCartaoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('nsuOrigemTransacaoCancelada')) {
        obj['nsuOrigemTransacaoCancelada'] = ApiClient.convertToType(data['nsuOrigemTransacaoCancelada'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('dataHoraTransacaoCancelada')) {
        obj['dataHoraTransacaoCancelada'] = ApiClient.convertToType(data['dataHoraTransacaoCancelada'], 'String');
      }
      if (data.hasOwnProperty('nsuAutorizacaoTransacaoCancelada')) {
        obj['nsuAutorizacaoTransacaoCancelada'] = ApiClient.convertToType(data['nsuAutorizacaoTransacaoCancelada'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'Integer');
      }
      if (data.hasOwnProperty('dataHoraTerminal')) {
        obj['dataHoraTerminal'] = ApiClient.convertToType(data['dataHoraTerminal'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
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
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema a ser cancelada.
   * @member {String} nsuOrigemTransacaoCancelada
   */
  exports.prototype['nsuOrigemTransacaoCancelada'] = undefined;

  /**
   * C\u00C3\u00B3digo de Processamento que identifica o Tipo da Transa\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * Apresenta a data e hora local da transa\u00C3\u00A7\u00C3\u00A3o a ser cancelada yyyy-MM-dd'T'HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00
   * @member {String} dataHoraTransacaoCancelada
   */
  exports.prototype['dataHoraTransacaoCancelada'] = undefined;

  /**
   * N\u00C3\u00BAmero Sequencial \u00C3\u009Anico do HOST que identifica a transa\u00C3\u00A7\u00C3\u00A3o no sistema que autorizou.
   * @member {String} nsuAutorizacaoTransacaoCancelada
   */
  exports.prototype['nsuAutorizacaoTransacaoCancelada'] = undefined;

  /**
   * Valor da transa\u00C3\u00A7\u00C3\u00A3o com duas casas decimais para os centavos.
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * N\u00C3\u00BAmero do Estabelecimento (N\u00C3\u00BAmero+DV).
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * Apresenta a data e hora local da consulta yyyy-MM-dd'T'HH:mm:ss.SSSZ. Ex: 2000-10-31T01:30:00.000-05:00
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * Apresenta a identifica\u00C3\u00A7\u00C3\u00A3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * N\u00C3\u00BAmero de Parcelas.
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;




  return exports;
}));
