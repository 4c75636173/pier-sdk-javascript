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
    root.Pier.OperadoraResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OperadoraResponse model module.
   * @module model/OperadoraResponse
   * @version 2.50.19
   */

  /**
   * Constructs a new <code>OperadoraResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de operadora telef\u00C3\u00B4nica
   * @alias module:model/OperadoraResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>OperadoraResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperadoraResponse} obj Optional instance to populate.
   * @return {module:model/OperadoraResponse} The populated <code>OperadoraResponse</code> instance.
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
    }
    return obj;
  }


  /**
   * Identificador da operadora
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Nome da operadora
   * @member {String} nome
   */
  exports.prototype['nome'] = undefined;




  return exports;
}));
