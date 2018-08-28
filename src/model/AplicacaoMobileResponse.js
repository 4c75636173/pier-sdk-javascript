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
    root.Pier.AplicacaoMobileResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoMobileResponse model module.
   * @module model/AplicacaoMobileResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>AplicacaoMobileResponse</code>.
   * {{{aplicacao_mobile_response_description}}}
   * @alias module:model/AplicacaoMobileResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>AplicacaoMobileResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoMobileResponse} obj Optional instance to populate.
   * @return {module:model/AplicacaoMobileResponse} The populated <code>AplicacaoMobileResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idPlataformaMobile')) {
        obj['idPlataformaMobile'] = ApiClient.convertToType(data['idPlataformaMobile'], 'Integer');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('cor')) {
        obj['cor'] = ApiClient.convertToType(data['cor'], 'String');
      }
      if (data.hasOwnProperty('som')) {
        obj['som'] = ApiClient.convertToType(data['som'], 'String');
      }
      if (data.hasOwnProperty('icone')) {
        obj['icone'] = ApiClient.convertToType(data['icone'], 'String');
      }
      if (data.hasOwnProperty('certificadoBase64')) {
        obj['certificadoBase64'] = ApiClient.convertToType(data['certificadoBase64'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{aplicacao_mobile_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{aplicacao_mobile_response_id_plataforma_mobile_value}}}
   * @member {Integer} idPlataformaMobile
   */
  exports.prototype['idPlataformaMobile'] = undefined;

  /**
   * {{{aplicacao_mobile_response_token_value}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * {{{aplicacao_mobile_response_cor_value}}}
   * @member {String} cor
   */
  exports.prototype['cor'] = undefined;

  /**
   * {{{aplicacao_mobile_response_som_value}}}
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * {{{aplicacao_mobile_response_icone_value}}}
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * {{{aplicacao_mobile_response_certificado_base64_value}}}
   * @member {String} certificadoBase64
   */
  exports.prototype['certificadoBase64'] = undefined;

  /**
   * {{{aplicacao_mobile_response_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;




  return exports;
}));
