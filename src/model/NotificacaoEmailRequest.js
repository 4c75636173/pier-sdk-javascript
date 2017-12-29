(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AnexoNotificacaoEmailRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnexoNotificacaoEmailRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.NotificacaoEmailRequest = factory(root.Pier.ApiClient, root.Pier.AnexoNotificacaoEmailRequest);
  }
}(this, function(ApiClient, AnexoNotificacaoEmailRequest) {
  'use strict';

  /**
   * The NotificacaoEmailRequest model module.
   * @module model/NotificacaoEmailRequest
   * @version 2.50.4
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

      if (data.hasOwnProperty('idTemplateNotificacao')) {
        obj['idTemplateNotificacao'] = ApiClient.convertToType(data['idTemplateNotificacao'], 'Integer');
      }
      if (data.hasOwnProperty('destinatarios')) {
        obj['destinatarios'] = ApiClient.convertToType(data['destinatarios'], ['String']);
      }
      if (data.hasOwnProperty('anexos')) {
        obj['anexos'] = ApiClient.convertToType(data['anexos'], [AnexoNotificacaoEmailRequest]);
      }
      if (data.hasOwnProperty('parametrosConteudo')) {
        obj['parametrosConteudo'] = ApiClient.convertToType(data['parametrosConteudo'], {'String': Object});
      }
    }
    return obj;
  }


  /**
   * ID para o template da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idTemplateNotificacao
   */
  exports.prototype['idTemplateNotificacao'] = undefined;

  /**
   * Lista de email(s) do(s) destinat\u00C3\u00A1rio(s).
   * @member {Array.<String>} destinatarios
   */
  exports.prototype['destinatarios'] = undefined;

  /**
   * Lista de ids dos anexos a serem enviados.
   * @member {Array.<module:model/AnexoNotificacaoEmailRequest>} anexos
   */
  exports.prototype['anexos'] = undefined;

  /**
   * Mapa de par\u00C3\u00A2metros para montagem da notifica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Object.<String, Object>} parametrosConteudo
   */
  exports.prototype['parametrosConteudo'] = undefined;




  return exports;
}));
