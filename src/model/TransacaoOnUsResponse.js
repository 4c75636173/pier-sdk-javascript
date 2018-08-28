(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MapOfstringAndstring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MapOfstringAndstring'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.TransacaoOnUsResponse = factory(root.Pier.ApiClient, root.Pier.MapOfstringAndstring);
  }
}(this, function(ApiClient, MapOfstringAndstring) {
  'use strict';

  /**
   * The TransacaoOnUsResponse model module.
   * @module model/TransacaoOnUsResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TransacaoOnUsResponse</code>.
   * {{{transacao_on_us_response_description}}}
   * @alias module:model/TransacaoOnUsResponse
   * @class
   * @param terminalRequisitante
   */
  var exports = function(terminalRequisitante) {







    this['terminalRequisitante'] = terminalRequisitante;
  };

  /**
   * Constructs a <code>TransacaoOnUsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransacaoOnUsResponse} obj Optional instance to populate.
   * @return {module:model/TransacaoOnUsResponse} The populated <code>TransacaoOnUsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('nsuOrigem')) {
        obj['nsuOrigem'] = ApiClient.convertToType(data['nsuOrigem'], 'String');
      }
      if (data.hasOwnProperty('nsuAutorizacao')) {
        obj['nsuAutorizacao'] = ApiClient.convertToType(data['nsuAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('planoDeParcelamento')) {
        obj['planoDeParcelamento'] = ApiClient.convertToType(data['planoDeParcelamento'], [MapOfstringAndstring]);
      }
      if (data.hasOwnProperty('codigoAutorizacao')) {
        obj['codigoAutorizacao'] = ApiClient.convertToType(data['codigoAutorizacao'], 'String');
      }
      if (data.hasOwnProperty('numeroMascaradoCartao')) {
        obj['numeroMascaradoCartao'] = ApiClient.convertToType(data['numeroMascaradoCartao'], 'String');
      }
      if (data.hasOwnProperty('nomePortadorCartao')) {
        obj['nomePortadorCartao'] = ApiClient.convertToType(data['nomePortadorCartao'], 'String');
      }
      if (data.hasOwnProperty('terminalRequisitante')) {
        obj['terminalRequisitante'] = ApiClient.convertToType(data['terminalRequisitante'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{transacao_on_us_response_nsu_origem_value}}}
   * @member {String} nsuOrigem
   */
  exports.prototype['nsuOrigem'] = undefined;

  /**
   * {{{transacao_on_us_response_nsu_autorizacao_value}}}
   * @member {String} nsuAutorizacao
   */
  exports.prototype['nsuAutorizacao'] = undefined;

  /**
   * {{{transacao_on_us_response_plano_de_parcelamento_value}}}
   * @member {Array.<module:model/MapOfstringAndstring>} planoDeParcelamento
   */
  exports.prototype['planoDeParcelamento'] = undefined;

  /**
   * {{{transacao_on_us_response_codigo_autorizacao_value}}}
   * @member {String} codigoAutorizacao
   */
  exports.prototype['codigoAutorizacao'] = undefined;

  /**
   * {{{transacao_on_us_response_numero_mascarado_cartao_value}}}
   * @member {String} numeroMascaradoCartao
   */
  exports.prototype['numeroMascaradoCartao'] = undefined;

  /**
   * {{{transacao_on_us_response_nome_portador_cartao_value}}}
   * @member {String} nomePortadorCartao
   */
  exports.prototype['nomePortadorCartao'] = undefined;

  /**
   * {{{transacao_on_us_response_terminal_requisitante_value}}}
   * @member {String} terminalRequisitante
   */
  exports.prototype['terminalRequisitante'] = undefined;




  return exports;
}));
