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
    root.Pier.AtribuirAssinaturaClientePersist = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AtribuirAssinaturaClientePersist model module.
   * @module model/AtribuirAssinaturaClientePersist
   * @version 2.50.17
   */

  /**
   * Constructs a new <code>AtribuirAssinaturaClientePersist</code>.
   * Objeto que representa a atribui\u00C3\u00A7\u00C3\u00A3o da assinatura do cliente
   * @alias module:model/AtribuirAssinaturaClientePersist
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>AtribuirAssinaturaClientePersist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AtribuirAssinaturaClientePersist} obj Optional instance to populate.
   * @return {module:model/AtribuirAssinaturaClientePersist} The populated <code>AtribuirAssinaturaClientePersist</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('idArquivo')) {
        obj['idArquivo'] = ApiClient.convertToType(data['idArquivo'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Arquivo
   * @member {Integer} idArquivo
   */
  exports.prototype['idArquivo'] = undefined;




  return exports;
}));
