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
    root.Pier.RiscoFraudeResponseValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RiscoFraudeResponseValue model module.
   * @module model/RiscoFraudeResponseValue
   * @version 2.66.1
   */

  /**
   * Constructs a new <code>RiscoFraudeResponseValue</code>.
   * {{{risco_fraude_response_description}}}
   * @alias module:model/RiscoFraudeResponseValue
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>RiscoFraudeResponseValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiscoFraudeResponseValue} obj Optional instance to populate.
   * @return {module:model/RiscoFraudeResponseValue} The populated <code>RiscoFraudeResponseValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTipoResolucao')) {
        obj['idTipoResolucao'] = ApiClient.convertToType(data['idTipoResolucao'], 'Integer');
      }
      if (data.hasOwnProperty('descricaoTipoResolucao')) {
        obj['descricaoTipoResolucao'] = ApiClient.convertToType(data['descricaoTipoResolucao'], 'String');
      }
      if (data.hasOwnProperty('flagAltoRisco')) {
        obj['flagAltoRisco'] = ApiClient.convertToType(data['flagAltoRisco'], 'Boolean');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('idTransacao')) {
        obj['idTransacao'] = ApiClient.convertToType(data['idTransacao'], 'Integer');
      }
      if (data.hasOwnProperty('dataTransacao')) {
        obj['dataTransacao'] = ApiClient.convertToType(data['dataTransacao'], 'String');
      }
      if (data.hasOwnProperty('valorTransacao')) {
        obj['valorTransacao'] = ApiClient.convertToType(data['valorTransacao'], 'Number');
      }
      if (data.hasOwnProperty('nomeEstabelecimento')) {
        obj['nomeEstabelecimento'] = ApiClient.convertToType(data['nomeEstabelecimento'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{risco_fraude_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{risco_fraude_response_id_tipo_resolucao_value}}}
   * @member {Integer} idTipoResolucao
   */
  exports.prototype['idTipoResolucao'] = undefined;

  /**
   * {{{risco_fraude_response_descricao_tipo_resolucao_value}}}
   * @member {String} descricaoTipoResolucao
   */
  exports.prototype['descricaoTipoResolucao'] = undefined;

  /**
   * {{{risco_fraude_response_flag_alto_risco_value}}}
   * @member {Boolean} flagAltoRisco
   */
  exports.prototype['flagAltoRisco'] = undefined;

  /**
   * {{{risco_fraude_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{risco_fraude_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{risco_fraude_response_id_transacao_value}}}
   * @member {Integer} idTransacao
   */
  exports.prototype['idTransacao'] = undefined;

  /**
   * {{{risco_fraude_response_data_transacao_value}}}
   * @member {String} dataTransacao
   */
  exports.prototype['dataTransacao'] = undefined;

  /**
   * {{{risco_fraude_response_valor_transacao_value}}}
   * @member {Number} valorTransacao
   */
  exports.prototype['valorTransacao'] = undefined;

  /**
   * {{{risco_fraude_response_nome_estabelecimento_value}}}
   * @member {String} nomeEstabelecimento
   */
  exports.prototype['nomeEstabelecimento'] = undefined;




  return exports;
}));
