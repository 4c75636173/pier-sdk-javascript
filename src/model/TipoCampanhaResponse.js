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
    root.Pier.TipoCampanhaResponse = factory(root.Pier.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TipoCampanhaResponse model module.
   * @module model/TipoCampanhaResponse
   * @version 2.47.3
   */

  /**
   * Constructs a new <code>TipoCampanhaResponse</code>.
   * Representa\u00C3\u00A7\u00C3\u00A3o da resposta do recurso do tipo de campanha
   * @alias module:model/TipoCampanhaResponse
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>TipoCampanhaResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TipoCampanhaResponse} obj Optional instance to populate.
   * @return {module:model/TipoCampanhaResponse} The populated <code>TipoCampanhaResponse</code> instance.
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
    }
    return obj;
  }


  /**
   * Identificador do tipo de campanha
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Descri\u00C3\u00A7\u00C3\u00A3o do tipo de campanha
   * @member {String} descricao
   */
  exports.prototype['descricao'] = undefined;




  return exports;
}));
