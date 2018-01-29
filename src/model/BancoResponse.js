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
    root.Pier.BancoResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BancoResponse model module.
   * @module model/BancoResponse
   * @version 2.50.17
   */

  /**
   * Constructs a new <code>BancoResponse</code>.
   * Objeto Banco
   * @alias module:model/BancoResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>BancoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BancoResponse} obj Optional instance to populate.
   * @return {module:model/BancoResponse} The populated <code>BancoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('nome')) {
        obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('digitoBanco')) {
        obj['digitoBanco'] = ApiClient.convertToType(data['digitoBanco'], 'String');
      }
    }
    return obj;
  }


  /**
   * C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id).
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome do banco
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do banco
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Digito do banco
   * @member {String} digitoBanco
   */
  exports.prototype['digitoBanco'] = undefined;




  return exports;
}));
