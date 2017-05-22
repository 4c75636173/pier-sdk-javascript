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
    root.Pier.NotificacaoSMSResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NotificacaoSMSResponse model module.
   * @module model/NotificacaoSMSResponse
   * @version 2.15.5
   */

  /**
   * Constructs a new <code>NotificacaoSMSResponse</code>.
   * Objeto Notifica\u00C3\u00A7\u00C3\u00A3o SMS
   * @alias module:model/NotificacaoSMSResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NotificacaoSMSResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificacaoSMSResponse} obj Optional instance to populate.
   * @return {module:model/NotificacaoSMSResponse} The populated <code>NotificacaoSMSResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('protocolo')) {
        obj['protocolo'] = ApiClient.convertToType(data['protocolo'], 'String');
      }
      if (data.hasOwnProperty('mensagem')) {
        obj['mensagem'] = ApiClient.convertToType(data['mensagem'], 'String');
      }
    }
    return obj;
  }


  /**
   * N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
   * @member {String} protocolo
   */
  exports.prototype['protocolo'] = undefined;

  /**
   * Mensagem de resposta da solicita\u00C3\u00A7\u00C3\u00B5es de envio
   * @member {String} mensagem
   */
  exports.prototype['mensagem'] = undefined;




  return exports;
}));
