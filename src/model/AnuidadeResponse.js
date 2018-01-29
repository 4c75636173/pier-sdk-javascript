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
    root.Pier.AnuidadeResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AnuidadeResponse model module.
   * @module model/AnuidadeResponse
   * @version 2.50.18
   */

  /**
   * Constructs a new <code>AnuidadeResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso de anuidade
   * @alias module:model/AnuidadeResponse
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>AnuidadeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnuidadeResponse} obj Optional instance to populate.
   * @return {module:model/AnuidadeResponse} The populated <code>AnuidadeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('descricao')) {
        obj['descricao'] = ApiClient.convertToType(data['descricao'], 'String');
      }
      if (data.hasOwnProperty('valor')) {
        obj['valor'] = ApiClient.convertToType(data['valor'], 'Number');
      }
      if (data.hasOwnProperty('flagAnuidadeBonificada')) {
        obj['flagAnuidadeBonificada'] = ApiClient.convertToType(data['flagAnuidadeBonificada'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * Identificador do Tipo de anuidade de b\u00C3\u00B4nus de celular
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de anuidade de b\u00C3\u00B4nus de celular
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;

  /**
   * Valor do tipo de anuidade de b\u00C3\u00B4nus de celular
   * @member {Number} valor
   */
  exports.prototype['valor'] = undefined;

  /**
   * Se o tipo de anuidade de b\u00C3\u00B4nus de celular \u00C3\u00A9 bonificada
   * @member {Boolean} flagAnuidadeBonificada
   */
  exports.prototype['flagAnuidadeBonificada'] = undefined;




  return exports;
}));
