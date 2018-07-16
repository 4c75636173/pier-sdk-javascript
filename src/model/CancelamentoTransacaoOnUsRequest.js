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
    root.Pier.CancelamentoTransacaoOnUsRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CancelamentoTransacaoOnUsRequest model module.
   * @module model/CancelamentoTransacaoOnUsRequest
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>CancelamentoTransacaoOnUsRequest</code>.
   * {{{cancelamento_transacao_on_us_request_description}}}
   * @alias module:model/CancelamentoTransacaoOnUsRequest
   * @class
   * @param nsuAutorizacaoTransacaoCancelada
   * @param nsuOrigem
   * @param nsuOrigemTransacaoCancelada
   * @param codigoProcessamento
   * @param dataHoraTransacaoCancelada
   * @param valorTransacao
   * @param numeroRealCartao
   * @param dataValidadeCartao
   * @param numeroEstabelecimento
   * @param dataHoraTerminal
   * @param terminalRequisitante
   */
  var exports = function(nsuAutorizacaoTransacaoCancelada, nsuOrigem, nsuOrigemTransacaoCancelada, codigoProcessamento, dataHoraTransacaoCancelada, valorTransacao, numeroRealCartao, dataValidadeCartao, numeroEstabelecimento, dataHoraTerminal, terminalRequisitante) {

    this['nsuAutorizacaoTransacaoCancelada'] = nsuAutorizacaoTransacaoCancelada;
    this['nsuOrigem'] = nsuOrigem;
    this['nsuOrigemTransacaoCancelada'] = nsuOrigemTransacaoCancelada;
    this['codigoProcessamento'] = codigoProcessamento;
    this['dataHoraTransacaoCancelada'] = dataHoraTransacaoCancelada;
    this['valorTransacao'] = valorTransacao;
    this['numeroRealCartao'] = numeroRealCartao;
    this['dataValidadeCartao'] = dataValidadeCartao;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
    this['dataHoraTerminal'] = dataHoraTerminal;
    this['terminalRequisitante'] = terminalRequisitante;
  };

  /**
   * Constructs a <code>CancelamentoTransacaoOnUsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelamentoTransacaoOnUsRequest} obj Optional instance to populate.
   * @return {module:model/CancelamentoTransacaoOnUsRequest} The populated <code>CancelamentoTransacaoOnUsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuAutorizacaoTransacaoCancelada')) {
        obj['nsuAutorizacaoTransacaoCancelada'] = ApiClient.convertToType(data['nsuAutorizacaoTransacaoCancelada'], 'String');
      }
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
        obj['dataHoraTerminal'] = ApiClient.convertToType(data['dataHoraTerminal'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{cancelamento_transacao_on_us_request_nsu_autorizacao_transacao_cancelada_value}}}
   * @member {String} nsuAutorizacaoTransacaoCancelada
   */
  exports.prototype['nsuAutorizacaoTransacaoCancelada'] = undefined;

  /**
   * {{{transacao_on_us_request_nsu_origem_value}}}
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{desfazimento_transacao_on_us_request_nsu_origem_transacao_cancelada_value}}}
   * @member {String} nsuOrigemTransacaoCancelada
   */
  exports.prototype['nsuOrigemTransacaoCancelada'] = undefined;

  /**
   * {{{transacao_on_us_request_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{desfazimento_transacao_on_us_request_data_hora_transacao_cancelada_value}}}
   * @member {String} dataHoraTransacaoCancelada
   */
  exports.prototype['dataHoraTransacaoCancelada'] = undefined;

  /**
   * {{{transacao_on_us_request_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{transacao_on_us_request_numero_real_cartao_value}}}
   * @member {String} numeroRealCartao
   */
  exports.prototype['numeroRealCartao'] = undefined;

  /**
   * {{{transacao_on_us_request_data_validade_cartao_value}}}
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * {{{transacao_on_us_request_numero_estabelecimento_value}}}
   * @member {Integer} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * {{{transacao_on_us_request_data_hora_terminal_value}}}
   * @member {String} dataHoraTerminal
   */
  exports.prototype['dataHoraTerminal'] = undefined;

  /**
   * {{{transacao_on_us_request_terminal_requisitante_value}}}
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;




  return exports;
}));
