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
    root.Pier.NotificacaoEmailResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoEmailResponse model module.
   * @module model/NotificacaoEmailResponse
   * @version 2.36.2
   */

  /**
   * Constructs a new <code>NotificacaoEmailResponse</code>.
   * Notifica\u00C3\u00A7\u00C3\u00A3o do envio do email
   * @alias module:model/NotificacaoEmailResponse
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>NotificacaoEmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoEmailResponse} obj Optional instance to populate.
   * @return {module:model/NotificacaoEmailResponse} The populated <code>NotificacaoEmailResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('idTemplateNotificacao')) {
        obj['idTemplateNotificacao'] = ApiClient.convertToType(data['idTemplateNotificacao'], 'Integer');
      }
      if (data.hasOwnProperty('idDocumento')) {
        obj['idDocumento'] = ApiClient.convertToType(data['idDocumento'], 'Integer');
      }
      if (data.hasOwnProperty('destinatario')) {
        obj['destinatario'] = ApiClient.convertToType(data['destinatario'], 'String');
      }
      if (data.hasOwnProperty('remetente')) {
        obj['remetente'] = ApiClient.convertToType(data['remetente'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da notifica\u00C3\u00A7\u00C3\u00A3o gerada.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do template da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idTemplateNotificacao
   */
  exports.prototype['idTemplateNotificacao'] = undefined;

  /**
   * C\u00C3\u00B3digo identificador do Documento.
   * @member {Integer} idDocumento
   */
  exports.prototype['idDocumento'] = undefined;

  /**
   * Email do destinat\u00C3\u00A1rio da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} destinatario
   */
  exports.prototype['destinatario'] = undefined;

  /**
   * Email do remetente da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {String} remetente
   */
  exports.prototype['remetente'] = undefined;




  return exports;
}));
