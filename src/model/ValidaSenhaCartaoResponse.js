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
    root.Pier.ValidaSenhaCartaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ValidaSenhaCartaoResponse model module.
   * @module model/ValidaSenhaCartaoResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>ValidaSenhaCartaoResponse</code>.
   * {{{valida_senha_cartao_response_description}}}
   * @alias module:model/ValidaSenhaCartaoResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ValidaSenhaCartaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidaSenhaCartaoResponse} obj Optional instance to populate.
   * @return {module:model/ValidaSenhaCartaoResponse} The populated <code>ValidaSenhaCartaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
      if (data.hasOwnProperty('idStatusCartao')) {
        obj['idStatusCartao'] = ApiClient.convertToType(data['idStatusCartao'], 'Integer');
      }
      if (data.hasOwnProperty('statusCartao')) {
        obj['statusCartao'] = ApiClient.convertToType(data['statusCartao'], 'String');
      }
      if (data.hasOwnProperty('quantidadeTentativas')) {
        obj['quantidadeTentativas'] = ApiClient.convertToType(data['quantidadeTentativas'], 'Integer');
      }
      if (data.hasOwnProperty('quantidadeMaximaTentativas')) {
        obj['quantidadeMaximaTentativas'] = ApiClient.convertToType(data['quantidadeMaximaTentativas'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{valida_senha_cartao_response_mensagem_value}}}
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;

  /**
   * {{{valida_senha_cartao_response_id_status_cartao_value}}}
   * @member {Integer} idStatusCartao
   */
  exports.prototype['idStatusCartao'] = undefined;

  /**
   * {{{valida_senha_cartao_response_status_cartao_value}}}
   * @member {String} statusCartao
   */
  exports.prototype['statusCartao'] = undefined;

  /**
   * {{{valida_senha_cartao_response_quantidade_tentativas_value}}}
   * @member {Integer} quantidadeTentativas
   */
  exports.prototype['quantidadeTentativas'] = undefined;

  /**
   * {{{valida_senha_cartao_response_quantidade_maxima_tentativas_value}}}
   * @member {Integer} quantidadeMaximaTentativas
   */
  exports.prototype['quantidadeMaximaTentativas'] = undefined;




  return exports;
}));
