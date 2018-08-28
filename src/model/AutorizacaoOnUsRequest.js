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
    root.Pier.AutorizacaoOnUsRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AutorizacaoOnUsRequest model module.
   * @module model/AutorizacaoOnUsRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AutorizacaoOnUsRequest</code>.
   * {{{autorizacao_on_us_request_description}}}
   * @alias module:model/AutorizacaoOnUsRequest
   * @class
   * @param nsuOrigem
   * @param numeroParcelas
   * @param codigoProcessamento
   * @param valorTransacao
   * @param numeroRealCartao
   * @param dataValidadeCartao
   * @param numeroEstabelecimento
   * @param dataHoraTerminal
   * @param terminalRequisitante
   */
  var exports = function(nsuOrigem, numeroParcelas, codigoProcessamento, valorTransacao, numeroRealCartao, dataValidadeCartao, numeroEstabelecimento, dataHoraTerminal, terminalRequisitante) {

    this['nsuOrigem'] = nsuOrigem;
    this['numeroParcelas'] = numeroParcelas;
    this['codigoProcessamento'] = codigoProcessamento;

    this['valorTransacao'] = valorTransacao;
    this['numeroRealCartao'] = numeroRealCartao;
    this['dataValidadeCartao'] = dataValidadeCartao;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
    this['dataHoraTerminal'] = dataHoraTerminal;
    this['terminalRequisitante'] = terminalRequisitante;
  };

  /**
   * Constructs a <code>AutorizacaoOnUsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutorizacaoOnUsRequest} obj Optional instance to populate.
   * @return {module:model/AutorizacaoOnUsRequest} The populated <code>AutorizacaoOnUsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('codigoSegurancaCartao')) {
        obj['codigoSegurancaCartao'] = ApiClient.convertToType(data['codigoSegurancaCartao'], 'String');
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
   * {{{transacao_on_us_request_nsu_origem_value}}}
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{autorizacao_on_us_request_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{transacao_on_us_request_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{autorizacao_on_us_request_codigo_seguranca_cartao_value}}}
   * @member {String} codigoSegurancaCartao
   */
  exports.prototype['codigoSegurancaCartao'] = undefined;

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
