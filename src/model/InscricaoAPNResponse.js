(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AplicacaoMobileEmissorResponse', './CartaoEmissorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AplicacaoMobileEmissorResponse'), require('./CartaoEmissorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.InscricaoAPNResponse = factory(root.Pier.ApiClient, root.Pier.AplicacaoMobileEmissorResponse, root.Pier.CartaoEmissorResponse);
  }
}(this, function(ApiClient, AplicacaoMobileEmissorResponse, CartaoEmissorResponse) {
  'use strict';

  /**
   * The InscricaoAPNResponse model module.
   * @module model/InscricaoAPNResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>InscricaoAPNResponse</code>.
   * {{{inscricao_apn_resposta_descricao}}}
   * @alias module:model/InscricaoAPNResponse
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>InscricaoAPNResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InscricaoAPNResponse} obj Optional instance to populate.
   * @return {module:model/InscricaoAPNResponse} The populated <code>InscricaoAPNResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('aplicacaoMobile')) {
        obj['aplicacaoMobile'] = AplicacaoMobileEmissorResponse.constructFromObject(data['aplicacaoMobile']);
      }
      if (data.hasOwnProperty('ativo')) {
        obj['ativo'] = ApiClient.convertToType(data['ativo'], 'Boolean');
      }
      if (data.hasOwnProperty('cartao')) {
        obj['cartao'] = CartaoEmissorResponse.constructFromObject(data['cartao']);
      }
      if (data.hasOwnProperty('dataCriacao')) {
        obj['dataCriacao'] = ApiClient.convertToType(data['dataCriacao'], 'String');
      }
      if (data.hasOwnProperty('dataDesativacao')) {
        obj['dataDesativacao'] = ApiClient.convertToType(data['dataDesativacao'], 'String');
      }
      if (data.hasOwnProperty('deviceToken')) {
        obj['deviceToken'] = ApiClient.convertToType(data['deviceToken'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * {{{inscricao_apn_resposta_aplicacao_mobile_descricao}}}
   * @member {module:model/AplicacaoMobileEmissorResponse} aplicacaoMobile
   */
  exports.prototype['aplicacaoMobile'] = undefined;

  /**
   * {{{inscricao_apn_resposta_ativo_descricao}}}
   * @member {Boolean} ativo
   */
  exports.prototype['ativo'] = undefined;

  /**
   * {{{inscricao_apn_resposta_cartao_descricao}}}
   * @member {module:model/CartaoEmissorResponse} cartao
   */
  exports.prototype['cartao'] = undefined;

  /**
   * {{{inscricao_apn_resposta_data_criacao_descricao}}}
   * @member {String} dataCriacao
   */
  exports.prototype['dataCriacao'] = undefined;

  /**
   * {{{inscricao_apn_resposta_data_desativacao_descricao}}}
   * @member {String} dataDesativacao
   */
  exports.prototype['dataDesativacao'] = undefined;

  /**
   * {{{inscricao_apn_resposta_device_token_descricao}}}
   * @member {String} deviceToken
   */
  exports.prototype['deviceToken'] = undefined;

  /**
   * {{{inscricao_apn_resposta_id_descricao}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));
