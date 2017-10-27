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
    root.Pier.AplicacaoMobileUpdate = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AplicacaoMobileUpdate model module.
   * @module model/AplicacaoMobileUpdate
   * @version 2.43.0
   */

  /**
   * Constructs a new <code>AplicacaoMobileUpdate</code>.
   * Objeto AplicacaoMobile
   * @alias module:model/AplicacaoMobileUpdate
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>AplicacaoMobileUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AplicacaoMobileUpdate} obj Optional instance to populate.
   * @return {module:model/AplicacaoMobileUpdate} The populated <code>AplicacaoMobileUpdate</code> instance.
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
   * Token da Aplicacao Mobile
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * Cor da Mensagem da Aplicacao Mobile
   * @member {String} cor
   */
  exports.prototype['cor'] = undefined;

  /**
   * Som da Mensagem da Aplicacao Mobile
   * @member {String} som
   */
  exports.prototype['som'] = undefined;

  /**
   * Icone da Mensagem da Aplicacao Mobile
   * @member {String} icone
   */
  exports.prototype['icone'] = undefined;

  /**
   * Certificado da Aplicacao Mobile
   * @member {String} certificado
   */
  exports.prototype['certificado'] = undefined;

  /**
   * Senha da Aplicacao Mobile
   * @member {String} senha
   */
  exports.prototype['senha'] = undefined;




  return exports;
}));
