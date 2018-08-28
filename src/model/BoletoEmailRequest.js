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
    root.Pier.BoletoEmailRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BoletoEmailRequest model module.
   * @module model/BoletoEmailRequest
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>BoletoEmailRequest</code>.
   * {{{boleto_email_request_description}}}
   * @alias module:model/BoletoEmailRequest
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>BoletoEmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoletoEmailRequest} obj Optional instance to populate.
   * @return {module:model/BoletoEmailRequest} The populated <code>BoletoEmailRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('idTemplateNotificacao')) {
        obj['idTemplateNotificacao'] = ApiClient.convertToType(data['idTemplateNotificacao'], 'Integer');
      }
      if (data.hasOwnProperty('parametros')) {
        obj['parametros'] = ApiClient.convertToType(data['parametros'], Object);
      }
    }
    return obj;
  }


  /**
   * {{{boleto_email_request_value}}}
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * {{{boleto_email_request_id_template_notificacao_value}}}
   * @member {Integer} idTemplateNotificacao
   */
  exports.prototype['idTemplateNotificacao'] = undefined;

  /**
   * {{{boleto_email_request_parametros_value}}}
   * @member {Object} parametros
   */
  exports.prototype['parametros'] = undefined;




  return exports;
}));
