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
    root.Pier.AtribuirAssinaturaClienteRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AtribuirAssinaturaClienteRequest model module.
   * @module model/AtribuirAssinaturaClienteRequest
   * @version 2.24.0
   */

  /**
   * Constructs a new <code>AtribuirAssinaturaClienteRequest</code>.
   * Objeto que representa a atribui\u00C3\u00A7\u00C3\u00A3o da assinatura do cliente
   * @alias module:model/AtribuirAssinaturaClienteRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AtribuirAssinaturaClienteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AtribuirAssinaturaClienteRequest} obj Optional instance to populate.
   * @return {module:model/AtribuirAssinaturaClienteRequest} The populated <code>AtribuirAssinaturaClienteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idImagem')) {
        obj['idImagem'] = ApiClient.convertToType(data['idImagem'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da imagem
   * @member {Integer} idImagem
   */
  exports.prototype['idImagem'] = undefined;




  return exports;
}));
