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
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>NotificacaoEmailRequest</code>.
   * {{{notificacao_email_request_description}}}
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
   * {{{notificacao_email_request_id_template_notificacao_value}}}
   * @member {Integer} idTemplateNotificacao
   */
  exports.prototype['idTemplateNotificacao'] = undefined;

  /**
   * {{{notificacao_email_request_destinatarios_value}}}
   * @member {Array.<String>} destinatarios
   */
  exports.prototype['destinatarios'] = undefined;

  /**
   * {{{notificacao_email_request_anexos_value}}}
   * @member {Array.<module:model/AnexoNotificacaoEmailRequest>} anexos
   */
  exports.prototype['anexos'] = undefined;

  /**
   * {{{notificacao_email_request_parametros_conteudo_value}}}
   * @member {Object.<String, Object>} parametrosConteudo
   */
  exports.prototype['parametrosConteudo'] = undefined;




  return exports;
}));
