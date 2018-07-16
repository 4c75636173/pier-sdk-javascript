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
    root.Pier.DispositivoPersistValue = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DispositivoPersistValue model module.
   * @module model/DispositivoPersistValue
   * @version 2.68.0
   */

  /**
   * Constructs a new <code>DispositivoPersistValue</code>.
   * {{{dispositivo_persist_description}}}
   * @alias module:model/DispositivoPersistValue
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DispositivoPersistValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DispositivoPersistValue} obj Optional instance to populate.
   * @return {module:model/DispositivoPersistValue} The populated <code>DispositivoPersistValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

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
   * {{{dispositivo_persist_token_value}}}
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * {{{dispositivo_persist_id_aplicacao_mobile_value}}}
   * @member {Integer} idAplicacaoMobile
   */
  exports.prototype['idAplicacaoMobile'] = undefined;

  /**
   * {{{dispositivo_persist_id_usuario_value}}}
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;




  return exports;
}));
