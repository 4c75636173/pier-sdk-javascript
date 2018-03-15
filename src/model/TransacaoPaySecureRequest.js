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
   * @version 2.57.0
   */

  /**
   * Constructs a new <code>TransacaoPaySecureRequest</code>.
   * Representa\u00E7\u00E3o da requisi\u00E7\u00E3o do recurso de transa\u00E7\u00E3o segura conductorPay
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
   * Data e hora utilizado na gera\u00E7\u00E3o do criptograma em GMT - 0
   * @member {String} dataHoraTransacao
   */
  exports.prototype['dataHoraTransacao'] = undefined;

  /**
   * Numero do cartao (criptografado)
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * Id do cart\u00E3o
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * Valor da transa\u00E7\u00E3o em moeda local
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * N\u00FAmero Sequencial \u00DAnico que identifica a transa\u00E7\u00E3o no sistema que a originou (critografado).
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * Nome do Portador do Cart\u00E3o que originou a transa\u00E7\u00E3o (criptografado).
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;

  /**
   * Origem da transa\u00E7\u00E3o
   * @member {String} origem
   */
  exports.prototype['origem'] = undefined;

  /**
   * Apresenta a identifica\u00E7\u00E3o do terminal requisitante
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;

  /**
   * C\u00F3digo de Processamento que identifica o Tipo da Transa\u00E7\u00E3o.
   * @member {String} codigoProcessamento
   */
  exports.prototype['codigoProcessamento'] = undefined;

  /**
   * Data de Validade do Cart\u00E3o. Ex: AAMM
   * @member {String} dataValidadeCartao
   */
  exports.prototype['dataValidadeCartao'] = undefined;

  /**
   * N\u00FAmero do Estabelecimento (N\u00FAmero+DV).
   * @member {String} numeroEstabelecimento
   */
  exports.prototype['numeroEstabelecimento'] = undefined;

  /**
   * N\u00FAmero de Parcelas.
   * @member {Integer} numeroParcelas
   */
  exports.prototype['numeroParcelas'] = undefined;

  /**
   * C\u00F3digo de Seguran\u00E7a do Cart\u00E3o (criptografado).
   * @member {String} codigoSegurancaCartao
   */
  exports.prototype['codigoSegurancaCartao'] = undefined;

  /**
   * Tipo de ordena\u00E7\u00E3o dos registros.
   * @member {Array.<String>} sort
   */
  exports.prototype['sort'] = undefined;




  return exports;
}));
