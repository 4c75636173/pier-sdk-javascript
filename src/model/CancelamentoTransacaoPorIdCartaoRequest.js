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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CancelamentoTransacaoPorIdCartaoRequest</code>.
   * {{{cancelamento_transacao_por_id_cartao_request_description}}}
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
   * {{{transacao_on_us_por_id_cartao_request_nsu_origem_value}}}
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{cancelamento_transacao_por_id_cartao_request_nsu_origem_transacao_cancelada_value}}}
   * @member {String} nsuOrigemTransacaoCancelada
   */
  exports.prototype['nsuOrigemTransacaoCancelada'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{cancelamento_transacao_por_id_cartao_request_data_hora_transacao_cancelada_value}}}
   * @member {String} dataHoraTransacaoCancelada
   */
  exports.prototype['dataHoraTransacaoCancelada'] = undefined;

  /**
   * {{{cancelamento_transacao_por_id_cartao_request_nsu_autorizacao_transacao_cancelada_value}}}
   * @member {String} nsuAutorizacaoTransacaoCancelada
   */
  exports.prototype['nsuAutorizacaoTransacaoCancelada'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_numero_estabelecimento_value}}}
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_data_hora_terminal_value}}}
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_terminal_requisitante_value}}}
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * {{{transacao_on_us_por_id_cartao_request_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;




  return exports;
}));
