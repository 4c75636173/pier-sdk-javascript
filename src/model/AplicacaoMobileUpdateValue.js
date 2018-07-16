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
    root.Pier.AplicacaoMobileUpdateValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoMobileUpdateValue model module.
   * @module model/AplicacaoMobileUpdateValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>AplicacaoMobileUpdateValue</code>.
   * {{{aplicacao_mobile_update_description}}}
   * @alias module:model/AplicacaoMobileUpdateValue
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>AplicacaoMobileUpdateValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoMobileUpdateValue} obj Optional instance to populate.
   * @return {module:model/AplicacaoMobileUpdateValue} The populated <code>AplicacaoMobileUpdateValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
      if (data.hasOwnProperty('certificado')) {
        obj['certificado'] = ApiClient.convertToType(data['certificado'], 'String');
      }
      if (data.hasOwnProperty('senha')) {
        obj['senha'] = ApiClient.convertToType(data['senha'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{aplicacao_mobile_update_token_value}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * {{{aplicacao_mobile_update_cor_value}}}
   * @member {String} cor
   */
  exports.prototype['cor'] = undefined;

  /**
   * {{{aplicacao_mobile_update_som_value}}}
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * {{{aplicacao_mobile_update_icone_value}}}
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * {{{aplicacao_mobile_update_certificado_value}}}
   * @member {String} certificado
   */
  exports.prototype['certificado'] = undefined;

  /**
   * {{{aplicacao_mobile_update_senha_value}}}
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;




  return exports;
}));
