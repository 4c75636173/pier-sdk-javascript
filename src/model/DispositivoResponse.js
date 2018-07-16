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
    root.Pier.DispositivoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DispositivoResponse model module.
   * @module model/DispositivoResponse
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DispositivoResponse</code>.
   * {{{dispositivo_response_description}}}
   * @alias module:model/DispositivoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>DispositivoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DispositivoResponse} obj Optional instance to populate.
   * @return {module:model/DispositivoResponse} The populated <code>DispositivoResponse</code> instance.
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
   * {{{dispositivo_response_id_value}}}
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * {{{dispositivo_response_token_value}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * {{{dispositivo_response_id_aplicacao_mobile_value}}}
   * @member {Integer} idAplicacaoMobile
   */
  exports.prototype['idAplicacaoMobile'] = undefined;

  /**
   * {{{dispositivo_response_id_usuario_value}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;




  return exports;
}));
