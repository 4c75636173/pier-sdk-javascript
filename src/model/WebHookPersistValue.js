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
    root.Pier.WebHookPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebHookPersistValue model module.
   * @module model/WebHookPersistValue
   * @version 2.74.2
   */

  /**
   * Constructs a new <code>WebHookPersistValue</code>.
   * {{{web_hook_persist_description}}}
   * @alias module:model/WebHookPersistValue
   * @class
   * @param tipoEvento
   * @param url
   */
  var exports = function(tipoEvento, url) {

    this['tipoEvento'] = tipoEvento;
    this['url'] = url;
  };

  /**
   * Constructs a <code>WebHookPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebHookPersistValue} obj Optional instance to populate.
   * @return {module:model/WebHookPersistValue} The populated <code>WebHookPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }


  /**
   * {{{web_hook_persist_tipo_evento_value}}}
   * @member {module:model/WebHookPersistValue.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * {{{web_hook_persist_url_value}}}
   * @member {String} url
   */
  exports.prototype['url'] = undefined;


  /**
   * Allowed values for the <code>tipoEvento</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TipoEventoEnum = { 
    /**
     * value: RISCO_FRAUDE
     * @const
     */
    RISCO_FRAUDE: "RISCO_FRAUDE",
    
    /**
     * value: CODIGO_SEGURANCA
     * @const
     */
    CODIGO_SEGURANCA: "CODIGO_SEGURANCA",
    
    /**
     * value: OUTROS
     * @const
     */
    OUTROS: "OUTROS",
    
    /**
     * value: OTP_3D_SECURE
     * @const
     */
    OTP_3D_SECURE: "OTP_3D_SECURE"
  };

  return exports;
}));
