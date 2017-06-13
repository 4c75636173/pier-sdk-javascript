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
    root.Pier.Dispositivo = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Dispositivo model module.
   * @module model/Dispositivo
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>Dispositivo</code>.
   * Dispositivo Mobile
   * @alias module:model/Dispositivo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Dispositivo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dispositivo} obj Optional instance to populate.
   * @return {module:model/Dispositivo} The populated <code>Dispositivo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('idAplicacaoMobile')) {
        obj['idAplicacaoMobile'] = ApiClient.convertToType(data['idAplicacaoMobile'], 'Integer');
      }
      if (data.hasOwnProperty('idUsuario')) {
        obj['idUsuario'] = ApiClient.convertToType(data['idUsuario'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * Identificador do dispositivo.
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Token do dispositivo.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * Identificador da Aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idAplicacaoMobile
   */
  exports.prototype['idAplicacaoMobile'] = undefined;

  /**
   * Identificador do usu\u00C3\u00A1rio.
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;




  return exports;
}));
