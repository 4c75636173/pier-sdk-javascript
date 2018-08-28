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
    root.Pier.TemplateNotificacaoDetalheResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TemplateNotificacaoDetalheResponse model module.
   * @module model/TemplateNotificacaoDetalheResponse
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>TemplateNotificacaoDetalheResponse</code>.
   * {{{template_notificacao_detalhe_response_description}}}
   * @alias module:model/TemplateNotificacaoDetalheResponse
   * @class
   */
  var exports = function() {











  };

  /**
   * Constructs a <code>TemplateNotificacaoDetalheResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateNotificacaoDetalheResponse} obj Optional instance to populate.
   * @return {module:model/TemplateNotificacaoDetalheResponse} The populated <code>TemplateNotificacaoDetalheResponse</code> instance.
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
      if (data.hasOwnProperty('templatePadrao')) {
        obj['templatePadrao'] = ApiClient.convertToType(data['templatePadrao'], 'String');
      }
      if (data.hasOwnProperty('remetente')) {
        obj['remetente'] = ApiClient.convertToType(data['remetente'], 'String');
      }
      if (data.hasOwnProperty('assunto')) {
        obj['assunto'] = ApiClient.convertToType(data['assunto'], 'String');
      }
      if (data.hasOwnProperty('dataInclusao')) {
        obj['dataInclusao'] = ApiClient.convertToType(data['dataInclusao'], 'String');
      }
      if (data.hasOwnProperty('dataAlteracao')) {
        obj['dataAlteracao'] = ApiClient.convertToType(data['dataAlteracao'], 'String');
      }
      if (data.hasOwnProperty('conteudo')) {
        obj['conteudo'] = ApiClient.convertToType(data['conteudo'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{template_notificacao_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{template_notificacao_response_id_configuracao_email_value}}}
   * @member {Integer} idConfiguracaoEmail
   */
  exports.prototype['idConfiguracaoEmail'] = undefined;

  /**
   * {{{template_notificacao_response_tipo_layout_value}}}
   * @member {module:model/TemplateNotificacaoDetalheResponse.TipoLayoutEnum} tipoLayout
   */
  exports.prototype['tipoLayout'] = undefined;

  /**
   * {{{template_notificacao_response_tipo_notificacao_value}}}
   * @member {module:model/TemplateNotificacaoDetalheResponse.TipoNotificacaoEnum} tipoNotificacao
   */
  exports.prototype['tipoNotificacao'] = undefined;

  /**
   * {{{template_notificacao_response_template_padrao_value}}}
   * @member {String} templatePadrao
   */
  exports.prototype['templatePadrao'] = undefined;

  /**
   * {{{template_notificacao_response_remetente_value}}}
   * @member {String} remetente
   */
  exports.prototype['remetente'] = undefined;

  /**
   * {{{template_notificacao_response_assunto_value}}}
   * @member {String} assunto
   */
  exports.prototype['assunto'] = undefined;

  /**
   * {{{template_notificacao_response_data_inclusao_value}}}
   * @member {String} dataInclusao
   */
  exports.prototype['dataInclusao'] = undefined;

  /**
   * {{{template_notificacao_response_data_alteracao_value}}}
   * @member {String} dataAlteracao
   */
  exports.prototype['dataAlteracao'] = undefined;

  /**
   * {{{template_notificacao_detalhe_response_conteudo_value}}}
   * @member {String} conteudo
   */
  exports.prototype['conteudo'] = undefined;


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
    VALIDAR_DISPOSITIVO: "VALIDAR_DISPOSITIVO",
    
    /**
     * value: NOTIFICACAO_EMAIL
     * @const
     */
    NOTIFICACAO_EMAIL: "NOTIFICACAO_EMAIL",
    
    /**
     * value: OTP_3D_SECURE
     * @const
     */
    OTP_3D_SECURE: "OTP_3D_SECURE"
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
     * value: WEBHOOK
     * @const
     */
    WEBHOOK: "WEBHOOK",
    
    /**
     * value: EMAIL
     * @const
     */
    EMAIL: "EMAIL"
  };

  return exports;
}));
