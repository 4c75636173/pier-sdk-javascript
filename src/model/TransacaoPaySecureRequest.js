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
    root.Pier.TransacaoPaySecureRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TransacaoPaySecureRequest model module.
   * @module model/TransacaoPaySecureRequest
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>TransacaoPaySecureRequest</code>.
   * {{{transacao_pay_secure_request_description}}}
   * @alias module:model/TransacaoPaySecureRequest
   * @class
   * @param terminalRequisitante
   * @param codigoProcessamento
   * @param dataValidadeCartao
   * @param numeroEstabelecimento
   * @param numeroParcelas
   * @param codigoSegurancaCartao
   */
  var exports = function(terminalRequisitante, codigoProcessamento, dataValidadeCartao, numeroEstabelecimento, numeroParcelas, codigoSegurancaCartao) {








    this['terminalRequisitante'] = terminalRequisitante;
    this['codigoProcessamento'] = codigoProcessamento;
    this['dataValidadeCartao'] = dataValidadeCartao;
    this['numeroEstabelecimento'] = numeroEstabelecimento;
    this['numeroParcelas'] = numeroParcelas;
    this['codigoSegurancaCartao'] = codigoSegurancaCartao;

  };

  /**
   * Constructs a <code>TransacaoPaySecureRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoPaySecureRequest} obj Optional instance to populate.
   * @return {module:model/TransacaoPaySecureRequest} The populated <code>TransacaoPaySecureRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('dataHoraTransacao')) {
        obj['dataHoraTransacao'] = ApiClient.convertToType(data['dataHoraTransacao'], 'String');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('nomePortadorCartao')) {
        obj['nomePortadorCartao'] = ApiClient.convertToType(data['nomePortadorCartao'], 'String');
      }
      if (data.hasOwnProperty('origem')) {
        obj['origem'] = ApiClient.convertToType(data['origem'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
      if (data.hasOwnProperty('codigoProcessamento')) {
        obj['codigoProcessamento'] = ApiClient.convertToType(data['codigoProcessamento'], 'String');
      }
      if (data.hasOwnProperty('dataValidadeCartao')) {
        obj['dataValidadeCartao'] = ApiClient.convertToType(data['dataValidadeCartao'], 'String');
      }
      if (data.hasOwnProperty('numeroEstabelecimento')) {
        obj['numeroEstabelecimento'] = ApiClient.convertToType(data['numeroEstabelecimento'], 'String');
      }
      if (data.hasOwnProperty('numeroParcelas')) {
        obj['numeroParcelas'] = ApiClient.convertToType(data['numeroParcelas'], 'Integer');
      }
      if (data.hasOwnProperty('codigoSegurancaCartao')) {
        obj['codigoSegurancaCartao'] = ApiClient.convertToType(data['codigoSegurancaCartao'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], ['String']);
      }
    }
    return obj;
  }


  /**
   * {{{transacao_pay_secure_request_data_hora_transacao_value}}}
   * @member {String} dataHoraTransacao
   */
  exports.prototype['dataHoraTransacao'] = undefined;

  /**
   * {{{transacao_pay_generic_request_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{transacao_pay_generic_request_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{transacao_pay_secure_request_valor_value}}}
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * {{{transacao_pay_secure_request_nsu_origem_value}}}
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{transacao_pay_secure_request_nome_portador_cartao_value}}}
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;

  /**
   * {{{transacao_pay_generic_request_origem_value}}}
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * {{{transacao_pay_secure_request_terminal_requisitante_value}}}
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * {{{transacao_pay_secure_request_codigo_processamento_value}}}
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * {{{transacao_pay_secure_request_data_validade_cartao_value}}}
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * {{{transacao_pay_secure_request_numero_estabelecimento_value}}}
   * @member {String} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * {{{transacao_pay_secure_request_numero_parcelas_value}}}
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * {{{transacao_pay_secure_request_codigo_seguranca_cartao_value}}}
   * @member {String} codigoSegurancaCartao
   */
  exports.prototype['codigoSegurancaCartao'] = undefined;

  /**
   * {{{global_menssagem_sort_sort}}}
   * @member {Array.<String>} sort
   */
  exports.prototype['sort'] = undefined;




  return exports;
}));
