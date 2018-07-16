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
    root.Pier.DadosCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DadosCartaoResponse model module.
   * @module model/DadosCartaoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DadosCartaoResponse</code>.
   * {{{dados_cartao_response_description}}}
   * @alias module:model/DadosCartaoResponse
   * @class
   */
  var exports = function() {














  };

  /**
   * Constructs a <code>DadosCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DadosCartaoResponse} obj Optional instance to populate.
   * @return {module:model/DadosCartaoResponse} The populated <code>DadosCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('flagVirtual')) {
        obj['flagVirtual'] = ApiClient.convertToType(data['flagVirtual'], 'Integer');
      }
      if (data.hasOwnProperty('numeroCartao')) {
        obj['numeroCartao'] = ApiClient.convertToType(data['numeroCartao'], 'String');
      }
      if (data.hasOwnProperty('dataValidade')) {
        obj['dataValidade'] = ApiClient.convertToType(data['dataValidade'], 'String');
      }
      if (data.hasOwnProperty('cvv2')) {
        obj['cvv2'] = ApiClient.convertToType(data['cvv2'], 'String');
      }
      if (data.hasOwnProperty('nomePlastico')) {
        obj['nomePlastico'] = ApiClient.convertToType(data['nomePlastico'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('idCartao')) {
        obj['idCartao'] = ApiClient.convertToType(data['idCartao'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorente')) {
        obj['numeroContaCorente'] = ApiClient.convertToType(data['numeroContaCorente'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} flagVirtual
   */
  exports.prototype['flagVirtual'] = undefined;

  /**
   * {{{dados_cartao_response_numero_cartao_value}}}
   * @member {String} numeroCartao
   */
  exports.prototype['numeroCartao'] = undefined;

  /**
   * {{{dados_cartao_response_data_validade_value}}}
   * @member {String} dataValidade
   */
  exports.prototype['dataValidade'] = undefined;

  /**
   * {{{dados_cartao_response_cvv2_value}}}
   * @member {String} cvv2
   */
  exports.prototype['cvv2'] = undefined;

  /**
   * {{{dados_cartao_response_nome_plastico_value}}}
   * @member {String} nomePlastico
   */
  exports.prototype['nomePlastico'] = undefined;

  /**
   * {{{dados_cartao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{dados_cartao_response_id_cartao_value}}}
   * @member {Integer} idCartao
   */
  exports.prototype['idCartao'] = undefined;

  /**
   * {{{dados_cartao_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{dados_cartao_response_numero_conta_corente_value}}}
   * @member {String} numeroContaCorente
   */
  exports.prototype['numeroContaCorente'] = undefined;

  /**
   * {{{dados_cartao_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{dados_cartao_response_status_conta_value}}}
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * {{{dados_cartao_response_id_status_cartao_value}}}
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * {{{dados_cartao_response_status_cartao_value}}}
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;




  return exports;
}));
