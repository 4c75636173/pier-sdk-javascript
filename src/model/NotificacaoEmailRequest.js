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
    root.Pier.NotificacaoEmailRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoEmailRequest model module.
   * @module model/NotificacaoEmailRequest
   * @version 2.39.3
   */

  /**
   * Constructs a new <code>NotificacaoEmailRequest</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso para envio de uma notifica\u00C3\u00A7\u00C3\u00A3o por email.
   * @alias module:model/NotificacaoEmailRequest
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>NotificacaoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoEmailRequest} obj Optional instance to populate.
   * @return {module:model/NotificacaoEmailRequest} The populated <code>NotificacaoEmailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idDocumento')) {
        obj['idDocumento'] = ApiClient.convertToType(data['idDocumento'], 'Integer');
      }
      if (data.hasOwnProperty('idTemplateNotificacao')) {
        obj['idTemplateNotificacao'] = ApiClient.convertToType(data['idTemplateNotificacao'], 'Integer');
      }
      if (data.hasOwnProperty('destinatario')) {
        obj['destinatario'] = ApiClient.convertToType(data['destinatario'], 'String');
      }
      if (data.hasOwnProperty('tipoLayout')) {
        obj['tipoLayout'] = ApiClient.convertToType(data['tipoLayout'], 'String');
      }
      if (data.hasOwnProperty('parametrosConteudo')) {
        obj['parametrosConteudo'] = ApiClient.convertToType(data['parametrosConteudo'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * ID para o documento a ser enviado.
   * @member {Integer} idDocumento
   */
  exports.prototype['idDocumento'] = undefined;

  /**
   * ID para o template da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idTemplateNotificacao
   */
  exports.prototype['idTemplateNotificacao'] = undefined;

  /**
   * Email do destinat\u00C3\u00A1rio.
   * @member {String} destinatario
   */
  exports.prototype['destinatario'] = undefined;

  /**
   * Tipo de layout para o template da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {module:model/NotificacaoEmailRequest.TipoLayoutEnum} tipoLayout
   */
  exports.prototype['tipoLayout'] = undefined;

  /**
   * Mapa de par\u00C3\u00A2metros para montagem da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Object.<String, Object>} parametrosConteudo
   */
  exports.prototype['parametrosConteudo'] = undefined;


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
    NOTIFICACAO_EMAIL: "NOTIFICACAO_EMAIL"
  };

  return exports;
}));
