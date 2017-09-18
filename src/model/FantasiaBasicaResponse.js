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
    root.Pier.FantasiaBasicaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FantasiaBasicaResponse model module.
   * @module model/FantasiaBasicaResponse
   * @version 2.33.0
   */

  /**
   * Constructs a new <code>FantasiaBasicaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de operadora telef\u00C3\u00B4nica
   * @alias module:model/FantasiaBasicaResponse
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>FantasiaBasicaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FantasiaBasicaResponse} obj Optional instance to populate.
   * @return {module:model/FantasiaBasicaResponse} The populated <code>FantasiaBasicaResponse</code> instance.
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
    }
    return obj;
  }


  /**
   * Identificador da fantasia b\u00C3\u00A1sica
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da fantasia b\u00C3\u00A1sica
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o da fantasia b\u00C3\u00A1sica
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
