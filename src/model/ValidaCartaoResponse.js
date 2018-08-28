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
    root.Pier.ValidaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaCartaoResponse model module.
   * @module model/ValidaCartaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ValidaCartaoResponse</code>.
   * {{{valida_cartao_response_description}}}
   * @alias module:model/ValidaCartaoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ValidaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ValidaCartaoResponse} The populated <code>ValidaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('idStatusConta')) {
        obj['idStatusConta'] = ApiClient.convertToType(data['idStatusConta'], 'Integer');
      }
      if (data.hasOwnProperty('statusConta')) {
        obj['statusConta'] = ApiClient.convertToType(data['statusConta'], 'String');
      }
      if (data.hasOwnProperty('idConta')) {
        obj['idConta'] = ApiClient.convertToType(data['idConta'], 'Integer');
      }
      if (data.hasOwnProperty('numeroAgencia')) {
        obj['numeroAgencia'] = ApiClient.convertToType(data['numeroAgencia'], 'Integer');
      }
      if (data.hasOwnProperty('numeroContaCorrente')) {
        obj['numeroContaCorrente'] = ApiClient.convertToType(data['numeroContaCorrente'], 'String');
      }
      if (data.hasOwnProperty('criptogramaResposta')) {
        obj['criptogramaResposta'] = ApiClient.convertToType(data['criptogramaResposta'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{valida_cartao_response_id_status_cartao_value}}}
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * {{{valida_cartao_response_status_cartao_value}}}
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * {{{valida_cartao_response_id_status_conta_value}}}
   * @member {Integer} idStatusConta
   */
  exports.prototype['idStatusConta'] = undefined;

  /**
   * {{{valida_cartao_response_status_conta_value}}}
   * @member {String} statusConta
   */
  exports.prototype['statusConta'] = undefined;

  /**
   * {{{valida_cartao_response_id_conta_value}}}
   * @member {Integer} idConta
   */
  exports.prototype['idConta'] = undefined;

  /**
   * {{{valida_cartao_response_numero_agencia_value}}}
   * @member {Integer} numeroAgencia
   */
  exports.prototype['numeroAgencia'] = undefined;

  /**
   * {{{valida_cartao_response_numero_conta_corrente_value}}}
   * @member {String} numeroContaCorrente
   */
  exports.prototype['numeroContaCorrente'] = undefined;

  /**
   * {{{valida_cartao_response_criptograma_resposta_value}}}
   * @member {String} criptogramaResposta
   */
  exports.prototype['criptogramaResposta'] = undefined;




  return exports;
}));
