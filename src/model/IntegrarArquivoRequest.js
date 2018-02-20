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
    root.Pier.IntegrarArquivoRequest = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The IntegrarArquivoRequest model module.
   * @module model/IntegrarArquivoRequest
   * @version 2.54.4
   */

  /**
   * Constructs a new <code>IntegrarArquivoRequest</code>.
   * Objeto de requisi\u00C3\u00A7\u00C3\u00A3o da integra\u00C3\u00A7\u00C3\u00A3o de Arquivos.
   * @alias module:model/IntegrarArquivoRequest
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>IntegrarArquivoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntegrarArquivoRequest} obj Optional instance to populate.
   * @return {module:model/IntegrarArquivoRequest} The populated <code>IntegrarArquivoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('cpf')) {
        obj['cpf'] = ApiClient.convertToType(data['cpf'], 'String');
      }
    }
    return obj;
  }


  /**
   * CPF do cliente de Arquivos a serem integrados
   * @member {String} cpf
   */
  exports.prototype['cpf'] = undefined;




  return exports;
}));
