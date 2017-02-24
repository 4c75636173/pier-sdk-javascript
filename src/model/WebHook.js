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
    root.Pier.WebHook = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The WebHook model module.
   * @module model/WebHook
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>WebHook</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o do recurso WebHook
   * @alias module:model/WebHook
   * @class
   * @param id
   * @param tipoEvento
   * @param metodo
   * @param url
   */
  var exports = function(id, tipoEvento, metodo, url) {

    this['id'] = id;
    this['tipoEvento'] = tipoEvento;
    this['metodo'] = metodo;
    this['url'] = url;
  };

  /**
   * Constructs a <code>WebHook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebHook} obj Optional instance to populate.
   * @return {module:model/WebHook} The populated <code>WebHook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('tipoEvento')) {
        obj['tipoEvento'] = ApiClient.convertToType(data['tipoEvento'], 'String');
      }
      if (data.hasOwnProperty('metodo')) {
        obj['metodo'] = ApiClient.convertToType(data['metodo'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }


  /**
   * Id do WebHook
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * TipoEvento a ser chamado pelo WebHook
   * @member {module:model/WebHook.TipoEventoEnum} tipoEvento
   */
  exports.prototype['tipoEvento'] = undefined;

  /**
   * M\u00C3\u00A9todo que a ser chamado pelo WebHook
   * @member {module:model/WebHook.MetodoEnum} metodo
   */
  exports.prototype['metodo'] = undefined;

  /**
   * URL que a ser consumida pelo WebHook
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
     * value: OUTROS
     * @const
     */
    OUTROS: "OUTROS"
  };  /**
   * Allowed values for the <code>metodo</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MetodoEnum = { 
    /**
     * value: GET
     * @const
     */
    GET: "GET",
    
    /**
     * value: POST
     * @const
     */
    POST: "POST",
    
    /**
     * value: PUT
     * @const
     */
    PUT: "PUT",
    
    /**
     * value: DELETE
     * @const
     */
    DELETE: "DELETE"
  };

  return exports;
}));
