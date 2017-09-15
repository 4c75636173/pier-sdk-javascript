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
    root.Pier.TemplateNotificacaoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TemplateNotificacaoResponse model module.
   * @module model/TemplateNotificacaoResponse
   * @version 2.32.0
   */

  /**
   * Constructs a new <code>TemplateNotificacaoResponse</code>.
   * Objeto de Notifica\u00C3\u00A7\u00C3\u00A3o EMAIL
   * @alias module:model/TemplateNotificacaoResponse
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>TemplateNotificacaoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateNotificacaoResponse} obj Optional instance to populate.
   * @return {module:model/TemplateNotificacaoResponse} The populated <code>TemplateNotificacaoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idConfiguracaoEmail')) {
        obj['idConfiguracaoEmail'] = ApiClient.convertToType(data['idConfiguracaoEmail'], 'Integer');
      }
      if (data.hasOwnProperty('tipoLayout')) {
        obj['tipoLayout'] = ApiClient.convertToType(data['tipoLayout'], 'String');
      }
      if (data.hasOwnProperty('tipoNotificacao')) {
        obj['tipoNotificacao'] = ApiClient.convertToType(data['tipoNotificacao'], 'String');
      }
      if (data.hasOwnProperty('assunto')) {
        obj['assunto'] = ApiClient.convertToType(data['assunto'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo Identificador.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de e-mail.
   * @member {Integer} idConfiguracaoEmail
   */
  exports.prototype['idConfiguracaoEmail'] = undefined;

  /**
   * Tipo do layout de e-mail.
   * @member {module:model/TemplateNotificacaoResponse.TipoLayoutEnum} tipoLayout
   */
  exports.prototype['tipoLayout'] = undefined;

  /**
   * Tipo da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {module:model/TemplateNotificacaoResponse.TipoNotificacaoEnum} tipoNotificacao
   */
  exports.prototype['tipoNotificacao'] = undefined;

  /**
   * Assunto do e-mail.
   * @member {String} assunto
   */
  exports.prototype['assunto'] = undefined;

  /**
   * Conteudo do e-mail.
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;

  /**
   * Data da inclus\u00C3\u00A3o.
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * Data altera\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;


  /**
   * Allowed values for the <code>tipoLayout</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoLayoutEnum = { 
    /**
     * value: RECUPERAR_SENHA
     * @const
     */
    RECUPERAR_SENHA: "RECUPERAR_SENHA",
    
    /**
     * value: FATURA_POR_EMAIL
     * @const
     */
    FATURA_POR_EMAIL: "FATURA_POR_EMAIL",
    
    /**
     * value: VALIDAR_DISPOSITIVO
     * @const
     */
    VALIDAR_DISPOSITIVO: "VALIDAR_DISPOSITIVO"
  };  /**
   * Allowed values for the <code>tipoNotificacao</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoNotificacaoEnum = { 
    /**
     * value: SMS
     * @const
     */
    SMS: "SMS",
    
    /**
     * value: PUSH_APNS
     * @const
     */
    PUSH_APNS: "PUSH_APNS",
    
    /**
     * value: PUSH_FCM
     * @const
     */
    PUSH_FCM: "PUSH_FCM",
    
    /**
     * value: PUSH_GCM
     * @const
     */
    PUSH_GCM: "PUSH_GCM",
    
    /**
     * value: EMAIL
     * @const
     */
    EMAIL: "EMAIL"
  };

  return exports;
}));
