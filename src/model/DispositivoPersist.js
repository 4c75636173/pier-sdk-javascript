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
    root.Pier.DispositivoPersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DispositivoPersist model module.
   * @module model/DispositivoPersist
   * @version 2.16.2
   */

  /**
   * Constructs a new <code>DispositivoPersist</code>.
   * Objeto Dispositivo
   * @alias module:model/DispositivoPersist
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>DispositivoPersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DispositivoPersist} obj Optional instance to populate.
   * @return {module:model/DispositivoPersist} The populated <code>DispositivoPersist</code> instance.
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
   * Apresenta o token do dispositivo.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  /**
   * Apresenta o identificador da aplica\u00C3\u00A7\u00C3\u00A3o.
   * @member {Integer} idAplicacaoMobile
   */
  exports.prototype['idAplicacaoMobile'] = undefined;

  /**
   * Apresenta o identificador do usu\u00C3\u00A1rio.
   * @member {Integer} idUsuario
   */
  exports.prototype['idUsuario'] = undefined;




  return exports;
}));
